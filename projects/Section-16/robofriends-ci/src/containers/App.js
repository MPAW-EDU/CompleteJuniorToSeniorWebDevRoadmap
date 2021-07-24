import React from 'react';
import {useEffect} from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { requestAliens, setSearchField } from '../redux/actions';


// This is test text to update the commit 
const App = (props) => {
  const filterBots = props.aliens.filter(robot => {
    return robot.name.toLowerCase().includes(props.searchField.toLowerCase())
  })

  const { appServiceWorker } = props;
  appServiceWorker.onInstalled(() => this.setState({ showInstalledMessage: true }))
  appServiceWorker.onUpdateFound(() => this.setState({ showUpdateMessage: true }))

  useEffect(() => {
    props.onRequestAliens()
  },[])

  return (  
    props.aliens.length?
      <div className="tc">
        <Header />
        <SearchBox onSearchChange={props.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterBots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
      :<div className="f2 tc pa7 ma7 white">Loading...</div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchAliens.searchField,
    aliens: state.requestAliens.aliens,
    isPending: state.requestAliens.isPending,
    error: state.requestAliens.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestAliens: () => dispatch(requestAliens())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

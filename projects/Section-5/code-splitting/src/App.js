import { Component } from 'react';
import './App.css';

// Imported Components
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    switch(this.state.route) {
      case 'page1':
        return <Page1 onRouteChange={this.onRouteChange} />
      case 'page2':
        return <Page2 onRouteChange={this.onRouteChange} />
      case 'page3':
        return <Page3 onRouteChange={this.onRouteChange} />
      default:
        return <Page1 onRouteChange={this.onRouteChange} />

    }        
  }
}

export default App;

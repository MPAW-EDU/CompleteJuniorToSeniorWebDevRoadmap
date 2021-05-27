
import {useEffect,useState} from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import axios from 'axios';


// This is test text to update the commit 
const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const filterBots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        setRobots(res.data)
      })
  },[])

  return (
    <div className="tc">
      <h1 className="f1">AlienFriends</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <CardList robots={filterBots}/>
    </div>
  );
}

export default App;

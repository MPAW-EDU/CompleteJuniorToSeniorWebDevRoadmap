import './App.css';
import axios from 'axios';
import {useState, useEffect } from 'react';
import Card from './components/Card';


// This is test text to update the commit 
const App = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(res => setRobots(res.data))
  },[])

  return (
    <div className="App">
      <h1 className="f1">AlienFriends</h1>
      {
        robots.map((robot,idx) => {
          return (
            <Card 
              name={robot.name} 
              username={robot.username} 
              email={robot.email} 
              id={idx}
            />
          )
        })
      }
    </div>
  );
}

export default App;

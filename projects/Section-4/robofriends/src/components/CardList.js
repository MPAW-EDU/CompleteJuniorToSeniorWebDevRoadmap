import React, {useEffect, useState} from 'react'
import Card from './Card';
import axios from 'axios';

const CardList = () => {
    const [robots, setRobots] = useState([]);

    useEffect(() => {
      axios
        .get('http://jsonplaceholder.typicode.com/users')
        .then(res => setRobots(res.data))
    },[])
    
    return (
        <div>
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
    )
}

export default CardList

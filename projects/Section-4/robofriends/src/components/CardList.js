import React from 'react'
import Card from './Card';

const CardList = ({robots}) => {

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
                        key={idx}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList


import React from 'react'

const Card = ({name,username,email,id}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="profile" src={`http://www.robohash.org/${id}?set=set2&200x200`} />
            <div>
                <h2>{username}</h2>
                <p>{name}</p>
                <p>{email}</p> 
            </div>
        </div>
    )
}

export default Card
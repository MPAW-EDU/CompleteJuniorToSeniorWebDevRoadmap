import React from 'react'

const SearchBox = ({onSearchChange}) => {
    return (
        <div className="pa2">
            <input
                onChange={onSearchChange} 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search aliens" 
            />
        </div>
    )
}

export default SearchBox

import React from 'react'
import './Profile.css';

const Profile = ({isProfileOpen, toggleModal}) => {
    return (
        <div className="br3 ba b-black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center bg-white">
            <button onClick={() => toggleModal()}>Click</button>
        </div>
    )
}

export default Profile

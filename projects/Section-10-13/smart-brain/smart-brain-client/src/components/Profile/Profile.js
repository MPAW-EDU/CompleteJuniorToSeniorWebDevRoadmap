import React from 'react'
import './Profile.css';

const Profile = ({isProfileOpen, toggleModal, user}) => {
    return (
        <div className="profile-modal">
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                <main className="pa4 black- w-80">
                    <img 
                        src="http://tachyons.io/img/logo.jpg" 
                        className="br-100 ba h4 w4 dib"
                        alt="avatar"
                    />
                    <h1>{user.name}</h1>
                    <h4>Images Submitted: {user.entries}</h4>
                    <p>Member Since: <br/> {user.joined}</p>
                    <hr />
                            <label 
                                className="mt2 fw6" 
                                htmlFor="user-name"
                                >Name
                            </label>
                            <input
                            className="pa2 ba w-100"
                            placeholder={user.name || 'Name Not Set'}
                            type="text"
                            name="user-name"
                            id="name"
                            />
                            <label 
                                className="mt2 fw6" 
                                htmlFor="email-address"
                                >Age:
                            </label>
                            <input
                            className="pa2 ba w-100"
                            placeholder={user.age || 'Age Not Set'}
                            type="email"
                            name="user-age"
                            id="age"
                            />
                            <label 
                                className="db fw6 lh-copy f6" 
                                htmlFor="user-pet"
                                >Pet:
                            </label>
                            <input
                            className="pa2 ba w-100"
                            placeholder={user.pet || 'Pet Not Set'}
                            type="text"
                            name="user-pet"
                            id="pet"
                            />
                        <div className="mt4" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <button className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20">Save</button>
                            <button onClick={() => toggleModal()} className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20">Cancel</button>
                        </div>
                </main>
                <div className='modal-close' onClick={() => toggleModal()}>
                    &times;
                </div>
            </article>
        </div>
    )
}

export default Profile
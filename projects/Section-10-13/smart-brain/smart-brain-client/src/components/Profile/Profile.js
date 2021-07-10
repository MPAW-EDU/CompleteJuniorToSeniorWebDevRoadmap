import React, { Component } from 'react'
import './Profile.css';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: this.props.user.name,
            age: this.props.user.age,
            pet: this.props.user.pet
        }
    }

    onFormChange = ( event ) => {
        switch(event.target.name) {
            case "user-name":
                this.setState({...this.state, name: event.target.value})
                break;
            case "user-age":
                this.setState({...this.state, age: event.target.value})
                break;
            case "user-pet":
                this.setState({...this.state, pet: event.target.value})
                break;
            default:
                console.log("An error occured in onFormChange");
                return;
        }
    }

    onProfileUpdate = ( data ) => {
        fetch(`http://localhost:3000/profile/${this.props.user.id}`,{
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({ formInput: data })
        })
        .then(resp => {
            this.props.toggleModal();
            this.props.loadUser({...this.props.user, ...data});
        }).catch(console.log())
    }

    render(){

        const { entries, joined } = this.props.user; 
        const { name, age, pet } = this.state;
        // console.log(this.props.user.name);

        return (
            <div className="profile-modal">
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                    <main className="pa4 black- w-80">
                        <img 
                            src="http://tachyons.io/img/logo.jpg" 
                            className="br-100 ba h4 w4 dib"
                            alt="avatar"
                        />
                        <h1>{this.state.name}</h1>
                        <h4>Images Submitted: {entries}</h4>
                        <p>Member Since: <br/> {joined}</p>
                        <hr />
                                <label 
                                    className="mt2 fw6" 
                                    htmlFor="user-name"
                                    >Name
                                </label>
                                <input
                                onChange={this.onFormChange}
                                className="pa2 ba w-100"
                                placeholder={this.state.name || 'Name Not Set'}
                                type="text"
                                name="user-name"
                                id="name"
                                />
                                <label 
                                    className="mt2 fw6" 
                                    htmlFor="user-age"
                                    >Age:
                                </label>
                                <input
                                onChange={this.onFormChange}
                                className="pa2 ba w-100"
                                placeholder={this.state.age || 'Age Not Set'}
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
                                onChange={this.onFormChange}
                                className="pa2 ba w-100"
                                placeholder={this.state.pet || 'Pet Not Set'}
                                type="text"
                                name="user-pet"
                                id="pet"
                                />
                            <div className="mt4" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                <button 
                                    onClick={() => this.onProfileUpdate({ name, age, pet})}
                                    className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20"
                                    >Save
                                </button>
                                <button onClick={this.props.toggleModal} className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20">Cancel</button>
                            </div>
                    </main>
                    <div className='modal-close' onClick={this.props.toggleModal}>
                        &times;
                    </div>
                </article>
            </div>
        )
        }
}

export default Profile

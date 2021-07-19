import React, { Component } from 'react'
import { 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu,
     DropdownItem 
} from 'reactstrap';

class ProfileIcon extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropDownOpen: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            dropDownOpen: !prevState.dropDownOpen
        }))
    }

    handleLogout = () => {
        let token = window.sessionStorage.getItem('token');
        if(token){
            fetch('http://localhost:3000/logout', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token 
                }
            })
            .then(resp => {
                console.log(resp.status)
                if(resp.status === 200) {
                    this.props.onRouteChange('signout');
                    window.sessionStorage.removeItem('token');
                    token = '';
                }
                console.log(`handleLogout: token - ${token}, window - ${window.sessionStorage.getItem('token')}`)
            })
        }
    }

    render(){
        return (
            <div className="pa4 tc">
                <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropDownOpen}
                    >
                        <img 
                            src="http://tachyons.io/img/logo.jpg" 
                            className="br-100 ba h3 w3 dib"
                            alt="avatar"
                        />
                    </DropdownToggle>
                    <DropdownMenu 
                        className='b--transparent shadow-5'
                        style={{marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.5)'}}
                        right
                        >
                        <DropdownItem onClick={() => this.props.toggleModal()}>View Profile</DropdownItem>
                        <DropdownItem onClick={() => this.handleLogout()}>Sign Out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default ProfileIcon

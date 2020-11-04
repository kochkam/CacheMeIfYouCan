import React from 'react';
import LinkButton from '../LinkButton';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar">
                <LinkButton className="home-logo" exact to='/'>
                    <i className="fas fa-hiking"></i>
                    Trails App
                </LinkButton>
                <LinkButton className="profile-logo" exact to='/UserProfile'>
                    <i class="far fa-user-circle"></i>
                    Sign Up
                </LinkButton>
            </nav>
        )
    }
}

export default Navbar;
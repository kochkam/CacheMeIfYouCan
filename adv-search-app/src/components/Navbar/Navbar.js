import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar">
                <h1 className="home-logo">
                    <i className="fas fa-hiking"></i>
                    Trails App
                </h1>
                <h1 className="profile-logo">
                    <i class="far fa-user-circle"></i>
                    Sign Up
                </h1>
            </nav>
        )
    }
}

export default Navbar;
import React from 'react';
import LinkButton from '../LinkButton';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar">
                <LinkButton className="home-logo" exact to='/'>
                    <i className="fas fa-hiking"></i>
                    Trail Blazin'
                </LinkButton>
                <LinkButton className="profile-logo" exact to='/user-profile'>
                    <i class="far fa-user-circle"></i>
                    Hiker Profile
                </LinkButton>
            </nav>
        )
    }
}

export default Navbar;
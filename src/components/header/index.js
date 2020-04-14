import React from 'react';
import './styles.css';

import {NavLink} from 'react-router-dom';

import profilePic from '../../resources/profile.png';

const Header = () => (
    <header id="header">
        <h1>Le Furry</h1>
        <NavLink to='/login'>
            <div id="login">
                <h4>Login</h4>
                <img src={profilePic} alt='profilePic' />
            </div>
        </NavLink>
    </header>
);

export default Header
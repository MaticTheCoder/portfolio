import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUser,faEnvelope, faChessKing } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link to="/">
            <div className="logo">
                <FontAwesomeIcon icon ={faChessKing} color="rgb(182, 127, 255)" ></FontAwesomeIcon>
            </div>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href='https://www.linkedin.com/in/matic-koren-83a30a240/'>
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"/>
                </a>
            </li>

            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href='https://github.com/MaticTheCoder'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e"/>
                </a>
            </li>

    
        </ul>
    </div>
);

export default Sidebar;

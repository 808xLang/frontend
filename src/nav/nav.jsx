import React, { useContext } from "react";
import { Link, NavLink, } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "../users/userContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import "./nav.css";

console.log(UserContext)
function NAV({ logout }) {
    const { currentUser } = useContext(UserContext);
    console.debug("Navigation", "currentUser=", currentUser);

    function loggedIn() {
        return (
            <header className="mainjoint">
                <ul className="navbar ">
                    <li>
                        <NavLink exact to="/companies">
                            Companies</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/jobs">
                            Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/profile'>
                            Profile</NavLink>
                    </li>
                    <li>
                        <Link to='/' onClick={logout}>
                            Log out {currentUser.first_name || currentUser.username}
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }

    function loggedOut() {
        return (
            <ul>
                <li>
                    <Link to='/login' >
                        Login
                    </Link>
                </li>
                <li>
                    <NavLink to='/signup'>
                        Register
                    </NavLink>
                </li>
            </ul>
        );
    }
    return (
        <nav>
            <Link to={'/' } className="jobly">
            <FontAwesomeIcon icon={faBriefcase} />
                Jobly
            </Link>
            {currentUser ? loggedIn() : loggedOut()}
        </nav>
    );
}

export default NAV;
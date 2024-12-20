import React from "react";
import { Link } from "react-router-dom";
import logo from "./LPimages/logo.jpeg";
// import "./nav.css";

const Nav = () => {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                {/* Wrap the logo with Link to navigate to the homepage */}
                <Link to="home">
                    <img className="logo" src={logo} alt="Site Logo" />
                </Link>
            </form>
            <ul>
                <li>
                    <Link className="navLink1" to="/home">
                        Home
                    </Link>
                    <Link className="navLink2" to="/First Aid">
                        First Aid
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;


import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: false,
        };
    }

    handleNavBarToggle(event) {
        event.preventDefault();

        const links = document.getElementsByClassName("navbar-links")[0];

        links.classList.toggle("active");
    }

    handleLinkClick() {
        const links = document.getElementsByClassName("navbar-links")[0];

        links.classList.toggle("active");
    }

    render() {
        return (
            <nav className="navbar">
                <div className="title">
                    <Link to={"/"}>EirikRH</Link>
                </div>

                <a
                    href="/"
                    className="toggle-button"
                    onClick={this.handleNavBarToggle.bind(this)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>

                <ul className="navbar-links">
                    <li>
                        <Link
                            className="link"
                            exact
                            to={"/AboutMe"}
                            onClick={this.handleLinkClick.bind(this)}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            exact
                            to={"/Projects"}
                            onClick={this.handleLinkClick.bind(this)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            exact
                            to={"/Certifications"}
                            onClick={this.handleLinkClick.bind(this)}
                        >
                            Certifications
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            exact
                            to={"/Contact"}
                            onClick={this.handleLinkClick.bind(this)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;

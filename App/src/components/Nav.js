import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: false,
        };
    }

    async handleNavBarToggle(event) {
        event.preventDefault();
        const { navToggle } = this.state;
        const links = document.getElementsByClassName("navbar-links")[0];

        this.setState({ navToggle: !navToggle });
        links.classList.toggle("active");
    }

    clearHamburgerMenu() {
        const { navToggle } = this.state;
        const links = document.getElementsByClassName("navbar-links")[0];

        if (navToggle) {
            this.setState({ navToggle: false });
            links.classList.toggle("active");
        }
    }

    componentDidMount() {
        window.addEventListener("resize", () => {
            const windowSize = window.innerWidth;
            const { navToggle } = this.state;

            if (windowSize > 1010 && navToggle) {
                this.clearHamburgerMenu();
            }
        });
        window.addEventListener("scroll", () => {
            const navNode = document.getElementById("navbar");
            if (window.scrollY > 1) {
                navNode.style.zIndex = 999;
                navNode.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            } else {
                navNode.style = "none";
            }
        });
    }

    render() {
        return (
            <nav className="navbar" id="navbar">
                <div className="title">
                    <Link to={"/"} onClick={this.clearHamburgerMenu.bind(this)}>
                        EirikRH
                    </Link>
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
                            onClick={this.clearHamburgerMenu.bind(this)}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            exact
                            to={"/Projects"}
                            onClick={this.clearHamburgerMenu.bind(this)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            exact
                            to={"/Certifications"}
                            onClick={this.clearHamburgerMenu.bind(this)}
                        >
                            Certifications
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            exact
                            to={"/Contact"}
                            onClick={this.clearHamburgerMenu.bind(this)}
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

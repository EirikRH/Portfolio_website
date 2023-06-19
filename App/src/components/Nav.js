import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <Link className="link" exact to={"/"}>
                    About Me
                </Link>
                <Link className="link" exact to={"/Projects"}>
                    Projects
                </Link>
                <Link className="link" exact to={"/Certifications"}>
                    Certifications
                </Link>
                <Link className="link" exact to={"/Contact"}>
                    Contact
                </Link>
            </nav>
        );
    }
}

export default Navigation;

import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faJsSquare,
    faNode,
} from "@fortawesome/free-brands-svg-icons";
class Certifications extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }, 1);
    }
    render() {
        return (
            <div className="certifications-box component">
                <div>
                    <h3>Technologies</h3>
                    <br />
                    <FontAwesomeIcon className="tech-icon" icon={faJsSquare} />
                    <FontAwesomeIcon className="tech-icon" icon={faNode} />
                    <FontAwesomeIcon className="tech-icon" icon={faReact} />
                </div>
                <div>
                    <h3>Certifications</h3>
                </div>
            </div>
        );
    }
}

export default Certifications;

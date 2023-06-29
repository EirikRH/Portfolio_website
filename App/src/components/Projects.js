import React, { Component } from "react";

class Projects extends Component {
    render() {
        const backgroundColor = this.props.backgroundColor;
        return (
            <div className="projects-box component" style={{ backgroundColor }}>
                <div className="title">Things I have worked on</div>
                <div className="project-holder">
                    <div className="project">Zero</div>
                    <div className="project">Zip</div>
                    <div className="project">NADAAAAA</div>
                </div>
            </div>
        );
    }
}
export default Projects;

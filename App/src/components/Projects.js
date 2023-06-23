import React, { Component } from "react";

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const backgroundColor = this.props.backgroundColor;
        return (
            <div className="projects-box component" style={{ backgroundColor }}>
                <div className="title">Things I have worked on</div>
                <div className="project-holder">
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                </div>
            </div>
        );
    }
}
export default Projects;

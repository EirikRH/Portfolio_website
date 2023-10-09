import React, { Component } from "react";

class Projects extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }, 1);
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
                </div>
            </div>
        );
    }
}
export default Projects;

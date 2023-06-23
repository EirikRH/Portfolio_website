import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            subject: "",
            contactInfo: "",
            message: "",
        };
    }
    handleSendMesage(event) {
        event.preventDefault();
    }

    handleInputFieldChange(event, target) {
        event.preventDefault();
    }
    render() {
        return (
            <div className="contact-box component">
                <div className="contact-text">
                    Do you have a question for me, or just want to have a chat?
                    <br />
                    <br />
                    Reach me through LinkedIn, <br />
                    Check out my GitHub, <br />
                    or simply write me a message below.
                    <div className="contact-icons">
                        <Link
                            to="https://www.linkedin.com/in/eirik-ron%C3%A6ss-hansen-b3b088118/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="contact-icon"
                                icon={faLinkedin}
                            />
                        </Link>
                        <Link
                            to="https://github.com/EirikRH"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="contact-icon"
                                icon={faGithubSquare}
                            />
                        </Link>
                    </div>
                </div>
                <div className="form-container">
                    <form className="contact-form">
                        <input
                            name="name"
                            className="text-input"
                            type="text"
                            placeholder="What do I call you?"
                        ></input>
                        <input
                            name="subject"
                            className="text-input"
                            type="text"
                            placeholder="Subject.."
                        ></input>
                        <input
                            name="contactInfo"
                            className="text-input"
                            type="text"
                            placeholder="Contact information..."
                        ></input>
                        <textarea
                            name="message"
                            className="message-input"
                            type="text-field"
                            placeholder="Message..."
                        ></textarea>
                        <button
                            className="send-button"
                            onClick={this.handleSendMesage.bind(this)}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;

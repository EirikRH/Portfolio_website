import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            subject: "",
            email: "",
            message: "",
            displayCancelButton: false,
            timeoutId: null,
        };
    }

    handleSendMesage(event) {
        const form = event.target.form;

        if (form.checkValidity()) {
            event.preventDefault();

            const { name, subject, email, message } = form;

            name.value = "";
            subject.value = "";
            email.value = "";
            message.value = "";

            this.setState({
                displayCancelButton: true,
            });

            const timeoutId = setTimeout(() => {
                this.setState({
                    displayCancelButton: false,
                });
            }, 5000);
            this.setState({ timeoutId });

            setTimeout(() => {
                const progressBar = document.querySelector(".progress-bar");
                progressBar.style.width = "100%";
            }, 100);
        }
    }

    handleCancelMessage(event) {
        event.preventDefault();

        const form = event.target.form;
        const { name, subject, email, message } = form;
        name.value = this.state.name;
        subject.value = this.state.subject;
        email.value = this.state.email;
        message.value = this.state.message;

        this.setState({
            displayCancelButton: false,
        });

        const { timeoutId } = this.state;
        clearTimeout(timeoutId);
    }

    handleInputFieldChange(event) {
        const content = event.target.value;
        const inputFieldName = event.target.name;

        this.setState({
            [inputFieldName]: content,
        });
    }

    componentDidMount() {
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }, 1);
    }
    render() {
        const { displayCancelButton } = this.state;
        const onFrontpage = this.props.onFrontpage;
        const backgroundColor = this.props.backgroundColor;

        return (
            <div className="contact-box component" style={{ backgroundColor }}>
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
                        {onFrontpage && (
                            <Link to="/Contact" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    className="contact-icon"
                                    icon={faEnvelopeSquare}
                                />
                            </Link>
                        )}
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
                {!onFrontpage && (
                    <div className="form-container">
                        <form className="contact-form">
                            <input
                                name="name"
                                required
                                className="text-input"
                                type="text"
                                placeholder="What do I call you?"
                                onChange={this.handleInputFieldChange.bind(
                                    this
                                )}
                            ></input>
                            <input
                                name="subject"
                                className="text-input"
                                type="text"
                                placeholder="Subject.."
                                onChange={this.handleInputFieldChange.bind(
                                    this
                                )}
                            ></input>
                            <input
                                name="email"
                                required
                                className="text-input"
                                type="email"
                                placeholder="your@email.com"
                                onChange={this.handleInputFieldChange.bind(
                                    this
                                )}
                            ></input>
                            <textarea
                                name="message"
                                required
                                className="message-input"
                                type="text-field"
                                placeholder="Message..."
                                onChange={this.handleInputFieldChange.bind(
                                    this
                                )}
                            ></textarea>
                            {(displayCancelButton && (
                                <button
                                    className="button cancel-button"
                                    type="submit"
                                    onClick={this.handleCancelMessage.bind(
                                        this
                                    )}
                                >
                                    Edit Message
                                    <span className="progress-bar"></span>
                                </button>
                            )) || (
                                <button
                                    className="button"
                                    type="submit"
                                    onClick={this.handleSendMesage.bind(this)}
                                >
                                    Send Message
                                </button>
                            )}
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default Contact;

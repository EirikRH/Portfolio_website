import React, { Component } from "react";

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
    render() {
        return (
            <div className="contact-container">
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
                    <button className="send-button">Send Message</button>
                </form>
            </div>
        );
    }
}

export default Contact;

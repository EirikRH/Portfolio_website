import React, { Component } from "react";
import HEADSHOT from "../resources/eirik.jpg";
class AboutMe extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }, 1);
    }

    render() {
        return (
            <div className="info-box component">
                <div className="img-rounder">
                    <img className="info-img" src={HEADSHOT} alt="Eirik" />
                </div>
                <div className="intro-box">
                    <h1 className="my-name">Eirik Ronæss Hansen</h1>
                    <p className="my-title">Full-Stack Web Developer</p>
                </div>
                <div className="info-text">
                    Eirik er en fersk fullstackutvikler med lidenskap for
                    løsningsarkitektur og spennende funksjonalitet. Å skape nye
                    og nyttige verktøyer, og gode brukeropplevelser er veldig
                    tilfredsstillende.
                </div>
            </div>
        );
    }
}

export default AboutMe;

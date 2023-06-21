import React, { Component } from "react";
import HEADSHOT from "../resources/eirik.jpg";
class AboutMe extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const info =
            "Eirik er en fersk fullstackutvikler med lidenskap for løsningsarkitektur og spennende funksjonalitet. Å skape nye og nyttige verktøyer, og gode brukeropplevelser er veldig tilfredsstillende -EirikBigboi";

        return (
            <div className="info-box">
                <div className="img-rounder">
                    <img className="info-img" src={HEADSHOT} alt="Eirik" />
                </div>
                <div className="info-text">{info}</div>
            </div>
        );
    }
}

export default AboutMe;

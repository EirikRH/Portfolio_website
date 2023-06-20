import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Projects from "./components/Projects";
import Navigation from "./components/Nav";
import LandingPage from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Navigation />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            exact="true"
                            element={<LandingPage />}
                        />
                        <Route
                            path="/Projects"
                            exact="true"
                            element={<Projects />}
                        />
                        <Route
                            path="/Certifications"
                            exact="true"
                            element={<Certifications />}
                        />
                        <Route
                            path="/Contact"
                            exact="true"
                            element={<Contact />}
                        />
                    </Routes>
                </main>
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Projects from "./components/Projects";
import Navigation from "./components/Nav";
import AboutMe from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

import "./App.css";

class App extends Component {
    render() {
        const allOfIt = (
            <div className="frontpage-main">
                <AboutMe />
                <Projects backgroundColor={"rgba(128, 128, 128, 0.114)"} />
                <Certifications />
                <Contact
                    backgroundColor={"rgba(128, 128, 128, 0.114)"}
                    onFrontpage={true}
                />
            </div>
        );
        return (
            <div className="App">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" exact="true" element={allOfIt} />
                        <Route
                            path="/AboutMe"
                            exact="true"
                            element={<AboutMe />}
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

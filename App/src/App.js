import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Navigation from "./components/Nav";
import LandingPage from "./components/About";
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
                    </Routes>
                </main>
            </div>
        );
    }
}

export default App;

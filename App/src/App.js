import React, { Component } from 'react';
import {From, Route, Routes} from 'react-router-dom';
import Frontpage from './components/Frontpage';
import About from './components/About';
import Navigation from './components/Nav';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render() {

      return (
          <div className='App'>
            <Navigation />
            <main>
              <Routes>
                <Route path='/' element={<Frontpage />}/>
                <Route path='/About' element={<About />}/>
              </Routes>
            </main>
          </div>
      );
    }
}
 
export default App;
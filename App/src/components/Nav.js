import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() { 
    return (
        <nav>
          <Link className='link' exact to={'/About'}>About Me</Link>
          <Link className='link' exact to={'/'}>Frontpage</Link>
        </nav>
    );
  }
}
 
export default Navigation;
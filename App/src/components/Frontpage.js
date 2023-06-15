import React, { Component } from 'react';

class Frontpage extends Component {

  render() {
    return <div className='carousel'>
      <div className='carousel-arrow' id='left'>left</div>
        <div className='slider'>

          <img src='https://placeholder.com/200?text=1' alt=''/>
          <img src='https://placeholder.com/210?text=2' alt=''/>
          <img src='https://placeholder.com/220?text=3' alt=''/>
          <img src='https://placeholder.com/230?text=4' alt=''/>
          <img src='https://placeholder.com/240?text=5' alt=''/>
          <img src='https://placeholder.com/250?text=6' alt=''/>
          <img src='https://placeholder.com/260?text=7' alt=''/>

        </div>
      <div className='carousel-arrow' id='right'>right</div>
    </div>;
  }
}
export default Frontpage;


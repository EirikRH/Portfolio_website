import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {  };
  }

  render() { 
    
    const info = 'Eirik er en fersk fullstackutvikler med lidenskap for løsningsarkitektur og gøy funksjonalitet. Å skape gode verktøyer, og fine brukeropplevelser er morsomt -EirikBigboi';
    
    return ( 
      <div className='info-box'>

        <p>{info}</p>

      </div>
    );
  }
}
 
export default About;
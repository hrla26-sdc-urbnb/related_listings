import React from 'react';
import Carousel from './carousel.js';
import './style.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }    
  }
  
  render(){
    return(
      <div>
        <h1 id='header_related_listings'>Similar listings</h1><br/>
        <div>
          <Carousel />
        </div>
      </div>    
    )
  }
}

export default App;
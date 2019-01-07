import React from 'react';
import Carousel from './carousel.js';
import  styles from './styles/app.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }    
  }
  
  render(){
    return(
      <div className={styles.appInline}>
        <h1 className={styles.header_related_listings}><div className={styles.headerSpacing}></div>Similar listings</h1><br/>
        <div>
          <Carousel />
        </div>
      </div>    
    )
  }
}

export default App;
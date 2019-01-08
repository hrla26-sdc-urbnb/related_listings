import React from 'react';
import axios from 'axios';
import Item from './carousel_element.js';
import styles from './styles/carousel.css'

class Carousel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      homes: [],
      current_homes: [],
      click: 0
    }    
    //this.change_fave = this.change_fave.bind(this);
    this.increase_click = this.increase_click.bind(this);
    this.decrease_click = this.decrease_click.bind(this);
    this.get_three = this.get_three.bind(this);
  }
  componentDidMount(){
    this.getItem(11111);
    //console.log('TEEEEMP', this.state.current_homes)
  }
  
  getItem(id) {
    axios.get(`http://54.173.112.54:4000/api/${id}`)
      .then(data => {this.setState({homes: data.data}); this.get_three(this.state.click)});
      //http://54.173.112.54:4000/api/${id}
    }

  change_fave(id){
    axios.put(`http://54.173.112.54:4000/api/${id}`);
    // http://54.173.112.54:4000/api/${id}
  }

  change_image(id){
    if(id === 0){
      document.getElementById("btn").src = "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Screen+Shot+2019-01-02+at+10.33.11+PM.png";  
    } else if (id === 1){
      document.getElementById("btn").src = 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Screen+Shot+2019-01-02+at+8.36.11+PM.png';
    }  
  }

  get_three(index){
    let temp = [];
    for(let i = index; i < index+3; i++){
      temp.push(this.state.homes[i]);
    }  
    this.setState({current_homes: temp});
  }

  increase_click(){
    let temp = this.state.click;
    temp += 1;
    this.setState({click: temp});
    this.get_three(temp);
  }

  decrease_click(){
    let temp = this.state.click;
    temp -= 1;
    this.setState({click: temp});
    this.get_three(temp);
  }
  
  render(){
    return(
      <div>
        <div className={styles.makeInline}>
         <div className={styles.leftButtonContainer}>{this.state.click > 0 ? (<button className={styles.leftButton} onClick={this.decrease_click} ><img src='https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/new_left_arrow+.png'></img></button>) : (<button className={styles.rightButton} onClick={this.decrease_click}><img  src='https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Screen+Shot+2019-01-05+at+5.14.03+PM.png'></img></button>)}</div>
         {this.state.current_homes.map((item, index) => {
          return (
              <Item key={index} changeFave={this.change_fave} id={item.id} favorite={item.favorite} image={item.pic} spec={item.specs} bed={item.bed_num} desc={item.description} cost={item.cost} star={item.stars} rate={item.ratings_num} /> 
          )})} 
          <div className={styles.rightButtonContainer}>{this.state.click === 7 ? (<button className={styles.rightButton} onClick={this.increase_click}><img src='https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Screen+Shot+2019-01-05+at+5.14.03+PM.png'></img></button>) : (<button className={styles.rightButton} onClick={this.increase_click}><img src='https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/new_right_arrow.png'></img></button>)}</div>
        </div>
      </div>    
    )
  }
} 

export default Carousel;
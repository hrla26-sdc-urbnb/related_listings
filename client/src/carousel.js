import React from 'react';
import axios from 'axios';
import Item from './carousel_element.js';

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
    console.log('TEEEEMP', this.state.current_homes)
  }
  
  getItem(id) {
    axios.get(`/api/${id}`)
      .then(data => {this.setState({homes: data.data}); console.log(this.state.homes, 'whaaat this???'); this.get_three(this.state.click)});
  }

  change_fave(id){
    axios.put(`/api/${id}`)
      .then(() => {
        console.log('fave clicked')});
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
  }

  decrease_click(){
    let temp = this.state.click;
    temp -= 1;
    this.setState({click: temp});
  }
  
  render(){
    return(
      <div>
        <div id='make_inline'>
          {this.state.click > 0 ? (<button id='left_button' onClick={this.decrease_click} ><img src='https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/arrow_left.png'></img></button>) : ''}
         {this.state.current_homes.map((item, index) => {
          return (
              <Item key={index} changeFave={this.change_fave} id={item.id} favorite={item.favorite} image={item.pic} spec={item.specs} bed={item.bed_num} desc={item.description} cost={item.cost} star={item.stars} rate={item.ratings_num} /> 
          )})} 
          {this.state.click === 4 ? '' : (<button id='right_button' onClick={this.increase_click}><img src='https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/new_right_arrow.png'></img></button>)}
        </div>
      </div>    
    )
  }
} 

export default Carousel;
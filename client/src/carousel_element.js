import React, { Component } from "react";
import axios from 'axios';
import styles from './styles/carousel_element.css';

class Item extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fave: false
    }  
    this.change_image = this.change_image.bind(this);
    this.change_fave = this.change_fave.bind(this);
  }
  change_fave(id){
    axios.put(`/api/${id}`)
      .then(() => {this.change_image(id)});
      //http://54.173.112.54:4000/api/${id}
  }

  change_image(id){
    if(id === 0){
      document.getElementById("btn").src = "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Screen+Shot+2019-01-02+at+10.33.11+PM.png";  
    } else if (id === 1){
      document.getElementById("btn").src = 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Screen+Shot+2019-01-02+at+8.36.11+PM.png';
    }  
  }

  render() {
    return (
      <div className={styles.carousel}> 
        <div className={styles.container}>
          <div className={styles.imgdiv}><img className={styles.images_related_listings} src={this.props.image}></img></div>
          <button className={styles.btn} onClick={() => this.change_fave(this.props.id)}><img src={(this.props.favorite === 0) ? 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Screen+Shot+2019-01-02+at+8.36.11+PM.png' : 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Screen+Shot+2019-01-02+at+10.33.11+PM.png'}/></button>
        </div>
        <div className='wrap'>
          <p>
          <div className={styles.first_line}>{this.props.spec}{' • '}{this.props.bed} {(this.props.bed === 1) ? ' bed ' : ' beds '} </div>
          <div className={styles.second_line}>
            {this.props.desc} 
          </div> 
          <div className={styles.third_line}>{this.props.cost} </div>
          <div className={styles.image_on_fourth}><img src={this.props.star === 5 ? 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Screen+Shot+2019-01-02+at+7.14.59+PM.png' : (this.props.star === 4 ? 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/4_STAARRRZ.png' : (this.props.star === 3 ? 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/3_STAARRRZ.png' : (this.props.star === 2 ? 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/2_STAARRRZ.png' : (this.props.star === 1 ? 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/1_STAARRRZ+.png' : ' '))))}/><div id='fourth_line'>{' '}{this.props.rate}</div></div>
          </p>
          <br/>
        </div>
      </div>    
    )
  }    
}

export default Item;
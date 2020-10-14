import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      autoplaySpeed:3000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
    };
    return (
      <Wrapper>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
 width:80%;
 border:2px solid red; 
 padding-left:50px;
`

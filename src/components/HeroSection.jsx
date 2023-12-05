import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Reveal from 'react-reveal'


const HeroSection = () => {
  return (
  <>
  <Wrapper>
    <Reveal>
    <div className="main-img">
    <div className="hero-content">
       <h2 className="hero-top-data">We are here to help you...!</h2>
       <p className="hero-sub-data">We connect you directly to dairy farms</p>
       <Button/>
      </div>
    </div>
    </Reveal>
  </Wrapper>
  </>
  )
}

const Wrapper = styled.section`
.main-img{
  width:100vw;
  height:80vh;
  background-image:url(mainpage.jpg);
  background-size:cover;
  display:flex;
 align-items:center;
 justify-content:center;
}
.hero-content{
 color:#009DD1;
 margin-bottom:120px;
 margin-left:100px;
 animation:moveup 2s linear;
}
.hero-content .hero-sub-data{
  max-width:50rem;
  font-size:1rem;
padding:15px;
text-align:center;
animation:moveup 2s linear;
}

@keyframes moveup{
from{
  0%{
    bottom:0;
  }
  25%{
    bottom:50px;
  }
}
}

`;

export default HeroSection

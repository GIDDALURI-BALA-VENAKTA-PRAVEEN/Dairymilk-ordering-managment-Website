import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Policy from '../Policy';

const Footer = () => {
  return (
    <>
    <Wrapper>
      <footer>
       <div className='con'>
    <div className='container grid grid-four-coloumn'>
     <h3>Dairy milk managment System</h3>
     <p>We provide a good services for farmers to profit both famers and customers</p>
    </div>
    <div className='footer-subscribe'>
     <h3 id="feed">Feedback...!</h3>
     <textarea placeholder='Enter your Feedback....!' className='textarea-box'></textarea>
     <form action='#'>
        <input type='email' placeholder='Your Email'/>
        <input type="button" value="Submit"/>
     </form>
    </div>
    </div>

    <div>
   <p>@{new Date().getFullYear()} All rights Reserved by Team9</p>
   <div>
    <NavLink to='/Policy'>
      <p>PRIVACY PLOICY</p>
      <p>TERMS & CONDITIONS</p>
      </NavLink>

   </div>
   </div>
   </footer>
    </Wrapper>
    </>

   
  )
}
const Wrapper = styled.section`
    
     footer{
      padding:2rem 0 5rem 0;
      background-color:${({theme})=> theme.colors.footer_bg};
      h3{
         font-size:20px;
         font-weight:bold;
        color:${({theme})=> theme.colors.hr};
        margin-bottom:2rem;
      }
      p{
        color:#fff;
        font-size:15px;
      }
     }
     .con{
      display:flex;
      text-align:center;
      justify-content:center;
      
     }
     .footer-subscribe{
      padding-left:20rem;
     }
    #feed{
      font-size:30px
    }
    .textarea-box{
      width:100%;
      height:51%;
     
    }
     
`;

export default Footer

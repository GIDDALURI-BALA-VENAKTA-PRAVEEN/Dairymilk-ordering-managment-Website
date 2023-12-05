import React from 'react';
import {NavLink} from "react-router-dom"
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
   <Mainheader>
      <NavLink>
        <img src="Logo.png" alt="Dairy Logo" className="logo" />
      </NavLink>
      <Navbar/>
    </Mainheader>
  )
}

const Mainheader = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
padding:0 4.8rem;
height:5rem;
background-color:${({theme}) => theme.colors.bg};

.logo{
  height:10rem;
  max-width:90%;
}
`;


export default Header;

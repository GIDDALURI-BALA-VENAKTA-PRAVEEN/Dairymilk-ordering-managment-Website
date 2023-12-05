import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const Nav = styled.nav`
   .Navbar-List{
     display:flex;
     gap:5rem;
     
     li{
      list-style:none;

      .Navbar-link{
        &:link,
        &:visited{
          display:inline-block;
          text-decoration:none;
          font-size:1rem;
          font-weight:600;
          transition:color 0.3s linear;
          color:${({theme})=>theme.colors.black};
        }
      &:hover,
      &:active{
        color:${({theme}) => theme.colors.helper};
      }
    }
     
   }
`;
  return (
   <Nav>
    <div className='MenuIcon'>
     <ul className='Navbar-List'>
          <li>
            <NavLink className="Navbar-link" to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className="Navbar-link" to='/Products'>Products</NavLink>
          </li>
          <li>
            <NavLink className="Navbar-link" to='/News'>News</NavLink>
          </li>
          <li>
            <NavLink className="Navbar-link" to='/Login'>Login</NavLink>
          </li>
          <li>
            <NavLink className="Navbar-link" to='/cart'>About</NavLink>
          </li>
     </ul>
    </div>
   </Nav>
  )
}


export default Navbar;

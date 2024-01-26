import React from "react";
import styled from "styled-components";
import logo from '../images/logo.png';
const NavbarContainer = styled.nav`
background-color: rgba(119, 221, 119, 0.3); /* Use rgba for transparency */
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add simple shadow */
  img{
    //width:80%;
    height:150px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={logo} alt=''/>
    </NavbarContainer>
  );
};

export default Navbar;
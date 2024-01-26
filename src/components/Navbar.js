import React from "react";
import styled from "styled-components";
import logo from '../images/logo.png';
const NavbarContainer = styled.nav`
  background-color: #f8f8f8;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add simple shadow */
  img{
    width:80%;
    height:300px;
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
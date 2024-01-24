// Navbar.js
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: ${props => props.theme.darkGreen};
  padding: 10px;
  text-align: center;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>Discover Bekaa</h1>
    </NavbarContainer>
  );
};

export default Navbar;

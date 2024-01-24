// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.darkGreen};
  padding: 10px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 My Green Website. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

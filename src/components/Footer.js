import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
background-color: #f8f8f8;
padding: 10px;
text-align: center;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add simple shadow */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Discover Bekaa. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

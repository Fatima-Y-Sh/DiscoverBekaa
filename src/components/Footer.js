import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
background-color: rgba(119, 221, 119, 0.3); /* Use rgba for transparency */
padding: 10px;
text-align: center;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add simple shadow */
a{
  text-decoration:none;
  color:black;
}
a:hover {
  color: #77dd77; /* Change color on hover */
}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Discover Bekaa. All rights reserved.</p>
      <h5>Powered By <a href='https://www.instagram.com/shalhoubpress?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank">Shalhoub Press</a></h5>

    </FooterContainer>
  );
};

export default Footer;

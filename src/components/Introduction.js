// Introduction.js
import React from "react";
import styled from "styled-components";
import map from '../images/Picture3.png';
const IntroductionContainer = styled.section`
padding: 20px;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`;
const IntroImage = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed its container */
  margin: 20px auto; /* Center the image */
`;

const Introduction = () => {
  return (
    <IntroductionContainer>
        <IntroImage src={map} alt='beqaa location'/>
        <h1>Discover the land of Beqaa governorate </h1>
      <h3>The Beqaa is a vast valley located between two mountain ranges.
         For years, the region has been known to be “the breadbasket of Lebanon” for its agricultural importance.
          So, To promote tourism development in Beqaa, We intend to emphasize the four must-visited villages in this region.
</h3>
    </IntroductionContainer>
  );
};

export default Introduction;

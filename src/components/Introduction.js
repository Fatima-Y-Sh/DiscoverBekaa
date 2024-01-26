import React from "react";
import styled from "styled-components";
import map from '../images/Picture3.png';
import Infographic from "./Infographic";
import Conclusion from "./Conclusion";

const IntroductionContainer = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IntroImage = styled.img`
  width: 30%; /* Adjust the width of the image */
  height: 500px;
`;

const TextContainer = styled.div`
  flex: 1; /* Take remaining width */
  padding-left: 20px; /* Add space between the image and the text */
  padding-right:100px;
  //text-align: left; /* Align text to the left */
  text-align: justify; /* Align text to justify */

`;
const Separator = styled.hr`
  width: 50%; /* Adjust the width of the line */
  margin: 20px auto; /* Center the line horizontally and add space */
  border: none;
  border-top: 5px solid  #77dd77; /* Set the line color and style */
`;
const Introduction = () => {
  return (
    <>
      <IntroductionContainer>
        <IntroImage src={map} alt='beqaa location'/>
        <TextContainer>
          <h1>Discover the land of Beqaa governorate</h1>
          <p>
            The Beqaa is a vast valley located between two mountain ranges.
            For years, the region has been known to be “the breadbasket of Lebanon” for its agricultural importance.
            So, to promote tourism development in Beqaa, We intend to emphasize the four must-visited villages in this region.
          </p>
        </TextContainer>
      </IntroductionContainer>
      <Separator />
      <Infographic />
      <Separator />

      <Conclusion/>
      <Separator />

    </>
  );
};

export default Introduction;

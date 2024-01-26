import React from "react";
import styled from "styled-components";
import brochure from '../images/brochure.jpeg';

const ConclusionContainer = styled.section`
  padding-left: 50px;
  padding-right: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;

  img{
    width:50%;
    height:auto;
  }
`;

const Conclusion = () => {
  return (
    <ConclusionContainer>
      <h1>Our Plan</h1>
      <img src={brochure} alt="brochure" />
      <p>Our plan simply is to create an inspiring Brochure. This brochure is a comprehensive guide to four charming villages, each offering unique attractions for travelers. It features carefully curated lists of must-visit places, delightful dining options, and comfortable accommodations.
      <br></br>
      The brochure's overarching goal is to catalyze tourism in these enchanting villages, leveraging the visual appeal of a map to guide travelers through their adventures. In addition to that, Travelers can expect the presence of a knowledgeable guide accompanying them throughout their entire journey, following with a website to keep people up-to-date on beqaa. 
      </p>
    </ConclusionContainer>
  );
};

export default Conclusion;

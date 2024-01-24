// Conclusion.js
import React from "react";
import styled from "styled-components";

const ConclusionContainer = styled.section`
  padding: 20px;
`;

const Conclusion = () => {
  return (
    <ConclusionContainer>
      <p>This is the conclusion paragraph of the website.</p>
      <img src="path/to/conclusion-image.jpg" alt="Conclusion" />
    </ConclusionContainer>
  );
};

export default Conclusion;

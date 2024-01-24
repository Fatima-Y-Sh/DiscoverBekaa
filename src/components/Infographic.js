// Infographic.js
import React, { useState } from "react";
import styled from "styled-components";

const InfographicContainer = styled.section`
  display: flex;
  margin: 20px;
`;

const Carousel = styled.div`
  width: 30%;
`;

const Element = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column; /* Updated to column direction */
  align-items: center;
  background-color: ${(props) =>
    props.isSelected ? props.theme.darkGreen : "transparent"};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const ElementImage = styled.img`
  width: 200px; /* Adjust the width as needed */
  margin-bottom: 10px; /* Add margin between image and text */
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  img {
    width: 100%; /* Adjust the width as needed */
    height: 750px; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Add margin or other styling as needed */
  }
`;
const Caption = styled.p`
  white-space: pre-line; /* Allow line breaks */
  text-align: left; /* Align text to the left */
  margin-top: 10px; /* Add margin above the caption */
  position: relative;

`;

const Infographic = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  const elements = [
    {
      id: 1,
      title: "Zahle",
      image: "../images/zahle.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      caption:"Visit the Churches \nGo wine tasting \nWadi Al-Arayesh \nOur Lady of Beqaa",
    },
    {
      id: 2,
      title: "Anjar",
      image: "https://via.placeholder.com/150",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      caption:"Visit the Anjar Castle \nGrab a bite at Al-Shames Restaurant",

    },
    {
      id: 3,
      title: "Rachaya Al Wadi",
      image: "https://via.placeholder.com/150",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      caption:"Back in 1948... \nRashaya's Castle \nThe longest 'souk' in Lebanon \nSki in Rachaya's Haramoun mountain",

    },
    {
        id: 4,
        title: "معبد عين حرشا",
        image: "https://via.placeholder.com/150",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        caption:"What else can you find near Rachaya?",

      },
  ];

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  return (
    <InfographicContainer>
      <Carousel>
        {elements.map((element) => (
          <Element
            key={element.id}
            onClick={() => handleElementClick(element)}
            isSelected={element === selectedElement}
          >
            <ElementImage src={element.image} alt={element.title} />
            <h1>{element.title}</h1>
            <Caption><p>{element.caption}</p></Caption>          
            </Element>
        ))}
      </Carousel>
      <Content>
        {selectedElement && (
          <div>
            <h2>{selectedElement.title}</h2>
            <img src={selectedElement.image} alt={selectedElement.title} />
            <p>{selectedElement.text}</p>
          </div>
        )}
      </Content>
    </InfographicContainer>
  );
};

export default Infographic;

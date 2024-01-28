import React, { useState } from "react";
import styled from "styled-components";
import zahle from '../images/zahle.jpg';
import anjar from '../images/anjar.jpeg';
import saydet from '../images/saydet.jpeg';
import rachaya from '../images/rachaya.jpeg';
import ayn from '../images/ayn.jpeg';
import z1 from '../images/z1.jpeg';
import z2 from '../images/z2.jpeg';
import z3 from '../images/z3.jpeg';
import a1 from '../images/a1.jpeg';
import a2 from '../images/a2.jpeg';
import a3 from '../images/a3.jpeg';
import r1 from '../images/r1.jpeg';
import r2 from '../images/r2.jpeg';
import r3 from '../images/r3.jpeg';
import r4 from '../images/r4.jpeg';
import ay1 from '../images/ay1.jpeg';
import ay2 from '../images/ay2.jpeg';


const InfographicContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin: 20px;
text-align: center;

@media screen and (min-width: 500px) {
  flex-direction: row;
}
`;

const Carousel = styled.div`
width: 100%;
max-width: 300px; /* Limit the width for better display on small screens */

@media screen and (min-width: 500px) {
  width: 30%; /* Adjust width for larger screens */
  max-width: none; /* Remove max-width for larger screens */
}
`;

const Element = styled.div`
cursor: pointer;
padding: 10px;
border: 1px solid #ddd;
margin-bottom: 10px;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${(props) => (props.isSelected ? props.theme.darkGreen : "transparent")};
color: ${(props) => (props.isSelected ? "white" : "black")};
transition: background-color 0.3s ease;

&:hover {
  background-color: #f0f0f0;
}
`;

const ElementImage = styled.img`
width: 100%;
max-width: 250px; /* Limit the width of the image */
margin-bottom: 10px;
`;

const Content = styled.div`
display:flex;
  flex: 1;
  padding: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center; /* Center images horizontally */
    padding:0;
  }
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 70%;
  margin-right: 20px;
`;

const MainImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const SideImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  display: flex;
  flex-direction: column; /* Stack images vertically */
  align-items: center; /* Center images horizontally */
  margin-top: 10px; /* Add margin between images */
  @media screen and (max-width: 500px) {
    width: 70%;
  }
  
`;

const SideImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const SideImage = styled.img`
  max-width: 100%;
  height: 250px;
  border-radius: 10px;
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #77dd77;
  color: white;
  padding: 5px;
  width: 100%;
  text-align: center;
  opacity: 90%;
  border-radius: 10px;
`;

const Caption = styled.p`
  white-space: pre-line;
  text-align: left;
  margin-top: 10px;
  position: relative;
`;

const MainImageCaption = styled.div`
  width: 100%;
  background-color: #77dd77;
  color: white;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  margin-top: auto;
  border-radius: 10px;
`;

const MainTextContainer = styled.div`
  width: 80%;
  margin-right: 20px;

`;

const MainText = styled.p`
  font-size: 20px;
  color: #333;
  text-align: justify;
  white-space: pre-line;
  @media screen and (max-width: 500px) {
    font-size:15px;
  }
`;

const RachayaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 500px) {
    display:flex;
    flex-direction: column;
    align-items: center; /* Center images horizontally */
  }
`;

const RachayaImageContainer = styled.div`
  position: relative;

`;

const RachayaImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
`;

const TempleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    display:flex;
    flex-direction: column;
    align-items: center; /* Center images horizontally */
  }
`;

const TempleImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const ImagesContainer = styled.div`
  width: 50%;
  margin-right: 20px;
  @media screen and (max-width: 500px) {
width:100%;
  }
`;

const ContentContainer = styled.div`
width: 100%;

`;


const Infographic = () => {
  const elements = [
    {
      id: 1,
      title: "Zahle",
      image: zahle,
      text: "Make The Most of Your Time While Visiting Zahle",
      caption:"Visit the Churches \nGo wine tasting \nWadi Al-Arayesh \nOur Lady of Beqaa",
      mainImageCaption: "سيدة زحلة",
      images: [
        { src: z1, caption: "كنيسة سيدة النجاة" },
        { src: z2, caption: "وادي العرايش" },
        { src: z3, caption: "شاتو كسارة" }
      ],
    },
    {
      id: 2,
      title: "Anjar",
      text: "Must Visited Places In Anjar",
      image: anjar,
      mainText: " Anjar Castle, located in the enchanting town of Anjar in Lebanon, is a captivating historical landmark that holds centuries of rich history and architectural marvels. This magnificent castle, built in the 8th century, is a testament to the skill and ingenuity of the Umayyad and Abbasid civilizations. Exploring the castle reveals a wealth of ancient ruins, each with its own story to tell. One of the most intriguing aspects of Anjar Castle is its strategic location nestled in the picturesque Beqaa Valley, the castle served as a vital stronghold, guarding the surrounding lands and trade routes.\nVisiting Anjar Castle is like stepping back in time, immersing yourself in the rich tapestry of history. As you wander through its ancient corridors and courtyards, you can't help but feel a sense of wonder at the architectural brilliance and the stories that echo through its walls.Whether you’re a history enthusiast, an architecture lover, or simply seeking a unique and captivating experience, Anjar Castle is a must-visit destination. So, come and explore this remarkable site, and let yourself be transported to a world of ancient wonders and timeless beauty.",
      caption:"Visit the Anjar Castle \nGrab a bite at Al-Shames Restaurant",
      images: [
        { src: a1 },
        { src: a2 },
        { src: a3 }
      ],
    },
    {
      id: 3,
      title: "Rachaya Al Wadi",
      image: rachaya,
      text: "Historical Places In Rachaya",
      caption:"Back in 1948... \nRashaya's Castle \nThe longest 'souk' in Lebanon \nSki in Rachaya's Haramoun mountain",
      images: [
        { src: r1, caption: "قلعة الإستقلال اليوم "},
        { src: r2, caption: "قلعة الإستقلال قبل  "},
        { src: r3, caption: "سوق راشيا القديم "},
        { src: r4, caption: "جبل حرمون (جبل الشيخ)" }
      ],
    },
    {
        id: 4,
        title: "معبد عين حرشا",
        image: ayn,
        mainText: "تنتشر على سفوح جبل حرمون المعابد بكثافة، ما يدل على الطابع المقدس الذي اتصف به هذا الجبل في العصور القديمة، ومن هذه المعابد المميزة معبد عين حرشا المتألق. ينتصب معبد عين حرشا الشهير بأناقته وجمال هندسته وزخارفه على السفح الغربي لجبل حرمون. وهو يتميز بتصميمه، إذ يعتبر من المعابد الأيونية النادرة في لبنان. يعود تاريخ بناء هذا المعبد الى العصر الروماني، وتحديداً إلى العام 114 م. أما تسمية المنطقة بـ 'عين حرشا' فهي كلمة آرامية الأصل تعني 'مكان العبادة'.",
        caption:"What else can you find near Rachaya?",
        images: [
          { src: ay1, caption: "قلعة الإستقلال اليوم "},
          { src: ay2, caption: "قلعة الإستقلال قبل  "}
        ],
    },
  ];
  const [selectedElement, setSelectedElement] = useState(elements[0]);



  const handleElementClick = (element) => {
    setSelectedElement(element);
    document.getElementById("contentContainer").scrollIntoView({ behavior: "smooth" });

  };

  const renderContent = () => {
    switch(selectedElement?.title) {
      case "Zahle":
        return (
          <div>
        
            <p  style={{fontSize: "30px", paddingLeft:'20px'}}>{selectedElement.text}</p>
            <Content>
            <MainImageContainer>
              <MainImage src={saydet} alt={selectedElement.title} />
              <MainImageCaption>{selectedElement.mainImageCaption}</MainImageCaption>
            </MainImageContainer>
              <SideImagesContainer>
                {selectedElement.images.map((i, index) => (
                  <SideImageContainer key={index}>
                    <SideImage src={i.src} alt={`Image ${index + 1}`} />
                    <ImageCaption>{i.caption}</ImageCaption>
                  </SideImageContainer>
                ))}
              </SideImagesContainer>
            </Content>

          </div>
        );
      case "Anjar":
        return (
          <div >
                        <p  style={{fontSize: "30px",paddingLeft:'20px'}}>{selectedElement.text}</p>
            <Content>
              <MainTextContainer>
                <MainText>{selectedElement.mainText}</MainText>
              </MainTextContainer>
              <SideImagesContainer>
                {selectedElement.images.map((i, index) => (
                  <SideImageContainer key={index}>
                    <SideImage src={i.src} alt={`Image ${index + 1}`} />
                  </SideImageContainer>
                ))}
              </SideImagesContainer>
            </Content>
          </div>
        );
      case "Rachaya Al Wadi":
        return (
          <div >
                                    <p  style={{fontSize: "30px",paddingLeft:'20px'}}>{selectedElement.text}</p>

<Content>
      <RachayaContainer>
        {selectedElement.images.map((image, index) => (
          <RachayaImageContainer key={index}>
            <RachayaImage src={image.src} alt={`Image ${index + 1}`} />
            <ImageCaption>{image.caption}</ImageCaption>
          </RachayaImageContainer>
        ))}
      </RachayaContainer>
    </Content>
          </div>
        );
        case "معبد عين حرشا":
          return (
            <div >
               <Content>
      <TempleContainer>

        <ImagesContainer>
          {selectedElement.images.map((image, index) => (
            <TempleImage
              key={index}
              src={image.src}
              alt={`Temple Image ${index + 1}`}
            />
          ))}
        </ImagesContainer>
        <MainTextContainer style={{direction:'rtl'}}>
          <MainText>{selectedElement.mainText}</MainText>
        </MainTextContainer>
      </TempleContainer>
    </Content>
            </div>
          );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Famous Destinations</h1>
    <InfographicContainer>
      <Carousel>
        {elements.map((element) => (
          <Element
            key={element.id}
            onClick={() => handleElementClick(element)}
            isSelected={element.id === selectedElement.id}
          >
            <ElementImage src={element.image} alt={element.title} />
            <h1>{element.title}</h1>
            <Caption><p>{element.caption}</p></Caption>
          </Element>
        ))}
      </Carousel>
      <ContentContainer id="contentContainer">
        {selectedElement && renderContent()}
      </ContentContainer>
    </InfographicContainer>
    </div>
  );
};

export default Infographic;

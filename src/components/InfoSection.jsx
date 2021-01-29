import styled from "styled-components";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const InfoSection = ({ infoData }) => {
  return (
    <Section>
      {infoData.map((item) => {
        return (
          <Container>
            <ColumnLeft>
              <h1>{item.heading}</h1>
              <p>{item.paragraphOne}</p>
              <p>{item.paragraphTwo}</p>
              <Button to="/homes" primary="true">{item.buttonLabel}</Button>
            </ColumnLeft>
            <ColumnRight reverse={item.reverse}>
              <img src={item.image} alt="home" />
            </ColumnRight>
          </Container>
        );
      })}
    </Section>
  );
};

// Styles
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 3rem 0rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

export default InfoSection;

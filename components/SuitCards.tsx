"use client";
import styled from "styled-components";

// Ümumi wrapper scroll-u gizlədir
const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

// Şəkillərin yerləşdiyi konteyner
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// Hər bir şəkil üçün stil
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 3 / 4;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const StyledImageLeft = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  margin-top: 0.1rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;


const StyledImageRight2 = styled(StyledImage)`
  @media (min-width: 768px) {
    width: 33.33%;
  }
`;

const StyledImageLeft3 = styled(StyledImage)`
  @media (min-width: 768px) {
    width: 33.33%;
  }
`;

export default function SuitCards() {
  return (
    <Wrapper>
      <Container>
        <StyledImage src="/takım1.jpeg" alt="Suit Card 1" />
        <StyledImage src="/takim2.jpeg" alt="Suit Card 2" />
      </Container>
      
      <StyledImageLeft src="stiliniyansit.jpg" />
      <StyledImageLeft src="/takım3.jpg" alt="Suit Card 3" />

      <Container>
        <StyledImageRight2 src="/aksesuar.jpg" alt="Aksessuar" />
        <StyledImageLeft3 src="/ayakkabi.jpg" alt="Ayakkabi" />
        <StyledImageRight2 src="/icgiyim.jpg" alt="Ic giyim" />
      </Container>
         <StyledImageLeft src="onlineexclusive.jpg" />
         <StyledImageLeft src="hemenindir.jpeg"/>
    </Wrapper>
  );
}

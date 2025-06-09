"use client";
import styled from "styled-components";

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

// Birinci şəkil üçün stil (25%)
const StyledImageLeft = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

// İkinci şəkil üçün stil (75%)
const StyledImageRight = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 75%;
  }
`;


export default function PhotoCard3() {
  return (
    <Wrapper>
      <Container>
        <StyledImageLeft src="/photo-card6.jpg" alt="Photo Card 6" />
        <StyledImageRight src="/photo-card7.jpg" alt="Photo Card 7" />
        <StyledImageLeft src="/photo-card8.jpg" alt="Photo Card 8" />
      </Container>
    </Wrapper>
  );
}

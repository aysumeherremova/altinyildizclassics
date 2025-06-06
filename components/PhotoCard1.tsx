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

export default function PhotoCard1() {
  return (
    <Wrapper>
      <Container>
        <StyledImageLeft src="/photo-card3.jpg" alt="Photo Card 3" />
        <StyledImageRight src="/photo-card4.jpg" alt="Photo Card 4" />
      </Container>
    </Wrapper>
  );
}

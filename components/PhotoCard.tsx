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
  height: auto;
  max-height: 500px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export default function PhotoCard() {
  return (
    <Wrapper>
      <Container>
        <StyledImage src="/photo-card2.jpg" alt="Photo Card 1" />
        <StyledImage src="/photo-card1.jpg" alt="Photo Card 2" />
      </Container>
    </Wrapper>
  );
}

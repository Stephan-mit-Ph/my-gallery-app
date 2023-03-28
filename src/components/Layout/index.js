import styled, { keyframes } from "styled-components";
import Navigation from "@/components/Navigation";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background-color: #FAFAFA;
  color: black;
  text-transform: uppercase;
  text-align: center;
  width: 100vw;
  box-shadow:  15px 15px 30px #e4e4e4,
             -15px -15px 30px #ffffff;
`;

const artsyHeading = keyframes`
0% {
  color: black;
}

50% {
  color: hotpink;
}

100% {
  color: black;
}
`;

const StyledHeading = styled.h1`
  &::before {
    content: "!";
    animation: ${artsyHeading} 1s infinite;
  }
`;

const StyledLayout = styled.div`
  margin: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <StyledHeader>
        <StyledHeading>Art.gallery</StyledHeading>
      </StyledHeader>
      <Content>{children}</Content>
      <Navigation />
    </StyledLayout>
  );
}

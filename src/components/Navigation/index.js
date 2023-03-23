import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  background: white;
  width: 100vw;
  height: 4rem;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 8px;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: unset;
  text-align: center;
  flex-grow: 1;
  height: 100%;
  transition: 0.1s ease-in;

  &:hover {
    background: hotpink;
  }
`;

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink href="/" aria-label="Go to spotlight art piece">
        Spotlight
      </StyledNavLink>
      <StyledNavLink href="/art-pieces/" aria-label="Go to all art pieces">
        Pieces
      </StyledNavLink>
      <StyledNavLink href="/favourites/" aria-label="Go to favorite art pieces">
        Favorites
      </StyledNavLink>
    </StyledNav>
  );
}

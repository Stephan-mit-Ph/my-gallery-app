import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("renders links Spotlight, Pieces, Favorites", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
  const piecesLink = screen.getByRole("link", { name: /all art pieces/i });
  const favoritesLink = screen.getByRole("link", {
    name: /favorite art pieces/i,
  });
  expect(spotlightLink).toBeInTheDocument();
  expect(piecesLink).toBeInTheDocument();
  expect(favoritesLink).toBeInTheDocument();
});

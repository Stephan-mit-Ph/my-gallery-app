import { render, screen } from "@testing-library/react";
import Spotlight from ".";

const testPieces = [
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
];

const testInfo = [
  {
    slug: "clay-bust-sculptures",
    isFavourite: true,
  },
  {
    slug: "split-shot-of-whale",
  },
  {
    slug: "woman-statue",
  },
];

test("renders artistname at the Spotlight page", () => {
  render(<Spotlight pieces={testPieces} artPiecesInfo={testInfo} />);

  const headingTester = screen.getByRole("heading", { name: /Spotlight/i });

  expect(headingTester).toBeInTheDocument();
});

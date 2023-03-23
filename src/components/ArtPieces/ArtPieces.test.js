import ArtPieces from ".";
import { render, screen } from "@testing-library/react";

const testPieces = [
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    dimensions: { width: 200, height: 250 },
    slug: "orange-red-and-green",
  },
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    dimensions: { width: 200, height: 250 },
    slug: "orange-red-and-green",
  },
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    dimensions: { width: 200, height: 250 },
    slug: "orange-red-and-green",
  },
];

const testInfo = [
  {
    slug: "clay-bust-sculptures",
    isFavourite: true,
  },
  {
    slug: "split-shot-of-whale",
    isFavourite: false,
  },
  {
    slug: "woman-statue",
    comments: [],
  },
];

test("should render image, title=name, artist", () => {
  render(<ArtPieces pieces={testPieces} artPiecesInfo={testInfo} />);
  const previews = screen.getAllByText(/name/i);

  expect(previews).toHaveLength(3);
});

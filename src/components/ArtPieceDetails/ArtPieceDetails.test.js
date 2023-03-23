import { render, screen } from "@testing-library/react";
import ArtPieceDetails from ".";

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

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: { slug: testImages.slug },
    };
  },
}));

test("renders image, title, artist, year, genre", () => {
  render(<ArtPieceDetails pieces={testPieces} artPiecesInfo={testInfo} />);
  const title = screen.getByRole("heading", {
    name: /title/i,
  });
  const artist = screen.getByText(/artist/i);
  const year = screen.getByText(/year/i);
  const genre = screen.getByText(/genre/i);
  const image = screen.getByRole("img");

  expect(title).toBeInTheDocument();
  expect(year).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
});

test("renders back link", () => {
  render(<ArtPieceDetails pieces={testPieces} artPiecesInfo={testInfo} />);
  const link = screen.getByRole("link", { name: /back/i });

  expect(link).toBeInTheDocument();
});

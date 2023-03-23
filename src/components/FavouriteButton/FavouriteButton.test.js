import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPieces from "../ArtPieces";
import ArtPieceDetails from "../ArtPieceDetails";
import Spotlight from "../Spotlight";
import FavouriteButton from ".";

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

const handleToggleFavourite = jest.fn();

test("renders favorite button in spotlight view", () => {
  render(<Spotlight pieces={testImages} artPiecesInfo={testInfo} />);
  const button = screen.getByLabel(/favorite/i);
  expect(button).toBeInTheDocument();
});

test("renders favorite button in list view", () => {
  render(<ArtPieces pieces={testImages} artPiecesInfo={testInfo} />);
  const button = screen.getByLabel(/favorite/i);
  expect(button).toBeInTheDocument();
});

test("renders favorite button in details view", () => {
  render(<ArtPieceDetails pieces={testImages} artPiecesInfo={testInfo} />);
  const button = screen.getByLabel(/favorite/i);
  expect(button).toBeInTheDocument();
});

test("clicking the favorite button on non-favorite piece saves piece as favorite", async () => {
  const user = userEvent.setup();

  render(
    <FavouriteButton
      onToggleFavourite={handleToggleFavourite}
      isFavourite={false}
      slug="clay-bust-sculptures"
    />
  );

  const button = screen.getByLabel(/favorite/i);
  await user.click(button);
  expect(handleToggleFavourite).toHaveBeenCalled();
});

test("clicking the favorite button on favorite piece removes piece from favorites", async () => {
  const user = userEvent.setup();

  render(
    <FavouriteButton
      onToggleFavourite={handleToggleFavourite}
      isFavourite={true}
      slug="clay-bust-sculptures"
    />
  );

  const button = screen.getByLabel(/favorite/i);
  await user.click(button);
  expect(handleToggleFavourite).toHaveBeenCalled();
});

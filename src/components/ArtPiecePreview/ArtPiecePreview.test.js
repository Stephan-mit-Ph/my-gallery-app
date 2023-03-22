import ArtPiecePreview from ".";

import { render, screen } from "@testing-library/react";

const testImage = [
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
];

test("should render image, title=name, artist", () => {
  render(
    <ArtPiecePreview
      imageSource={testImage.imageSource}
      name={testImage.name}
      artist={testImage.artist}
    />
  );
  const image = screen.getByRole("img");
  const name = screen.getByText(/name/i);
  const artist = screen.getByText(/artist/i);

  expect(image).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
});

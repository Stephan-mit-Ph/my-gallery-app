import Image from "next/image";
import FavouriteButton from "../FavouriteButton";

export default function Spotlight({
  pieces,
  onToggleFavourite,
  artPiecesInfo,
}) {
  const currentPiece = pieces[Math.floor(Math.random() * pieces.length)];
  const isFavourite = artPiecesInfo.find(
    (piece) => piece.slug === currentPiece.slug
  )?.isFavourite;

  return (
    <>
      <Image
        src={currentPiece.imageSource}
        alt={currentPiece.name}
        height={400}
        width={300}
      />
      <FavouriteButton
        onToggleFavourite={onToggleFavourite}
        slug={currentPiece.slug}
        isFavourite={isFavourite}
      />
      <h3 key={currentPiece.slug}>Spotlight: @{currentPiece.artist}</h3>
    </>
  );
}

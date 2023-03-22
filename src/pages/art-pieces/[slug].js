import FavouriteButton from "@/components/FavouriteButton";
import Image from "next/image";
import { useRouter } from "next/router";

function getNewHeight(width, height, size) {
  const ratio = width / height;
  return ratio * size;
}

export default function ArtPieceDetails({
  pieces,
  artPiecesInfo,
  onToggleFavourite,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const currentPiece = pieces.find((piece) => {
    return piece.slug === slug;
  });
  const isFavourite = artPiecesInfo.find(
    (piece) => piece.slug === currentPiece.slug
  )?.isFavourite;
  return (
    <div>
      <button
        type="button"
        aria-label="back to art pieces list"
        onClick={() => {
          router.push("/art-pieces");
        }}
      >
        Back
      </button>
      <h1>Title: {currentPiece.name}</h1>
      <Image
        src={currentPiece.imageSource}
        alt={currentPiece.name}
        width={390}
        height={getNewHeight(
          currentPiece.dimensions.width,
          currentPiece.dimensions.height,
          390
        )}
      />
      <FavouriteButton
        onToggleFavourite={onToggleFavourite}
        isFavourite={isFavourite}
        slug={currentPiece.slug}
      />
      <ul>
        <li>Artist: {currentPiece.artist}</li>
        <li>Year: {currentPiece.year}</li>
        <li>Genre: {currentPiece.genre}</li>
      </ul>
    </div>
  );
}
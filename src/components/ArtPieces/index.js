import Link from "next/link";
import ArtPiecePreview from "../ArtPiecePreview";
import FavouriteButton from "../FavouriteButton";

export default function ArtPieces({
  pieces,
  onToggleFavourite,
  artPiecesInfo,
}) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <div key={piece.slug}>
            <FavouriteButton
              onToggleFavourite={onToggleFavourite}
              slug={piece.slug}
              isFavourite={
                artPiecesInfo.find((pieceInfo) => pieceInfo.slug === piece.slug)
                  ?.isFavourite
              }
            />
            <Link href={`/art-pieces/${piece.slug}`}>
              <ArtPiecePreview
                imageSource={piece.imageSource}
                name={piece.name}
                artist={piece.artist}
                slug={piece.slug}
                onToggleFavourite={onToggleFavourite}
                artPiecesInfo={artPiecesInfo}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
}

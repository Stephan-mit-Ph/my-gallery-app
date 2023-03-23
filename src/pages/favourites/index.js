import ArtPieces from "@/components/ArtPieces";

export default function FavoritePiecesPage({
  favouritePieces,
  artPiecesInfo,
  onToggleFavourite,
  onSubmitComment,
}) {
  return (
    <ArtPieces
      pieces={favouritePieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavourite={onToggleFavourite}
      onSubmitComment={onSubmitComment}
    />
  );
}

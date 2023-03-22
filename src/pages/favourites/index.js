import ArtPieces from "@/components/ArtPieces";

export default function FavoritePiecesPage({
  favouritePieces,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <ArtPieces
      pieces={favouritePieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
      onSubmitComment={onSubmitComment}
    />
  );
}

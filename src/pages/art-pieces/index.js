import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleFavourite,
}) {
  return (
    <ArtPieces
      pieces={pieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavourite={onToggleFavourite}
    />
  );
}

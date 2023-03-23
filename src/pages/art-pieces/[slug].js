import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavourite,
  onSubmitComment,
}) {
  return (
    <ArtPieceDetails
      pieces={pieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavourite={onToggleFavourite}
      onSubmitComment={onSubmitComment}
    />
  );
}

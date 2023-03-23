import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  onToggleFavourite,
  artPiecesInfo,
  onSubmitComment,
}) {
  return (
    <div>
      <Spotlight
        pieces={pieces}
        onToggleFavourite={onToggleFavourite}
        artPiecesInfo={artPiecesInfo}
        onSubmitComment={onSubmitComment}
      />
    </div>
  );
}

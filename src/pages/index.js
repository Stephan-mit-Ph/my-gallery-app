import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  onToggleFavourite,
  artPiecesInfo,
}) {
  return (
    <div>
      <Spotlight
        pieces={pieces}
        onToggleFavourite={onToggleFavourite}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FavouriteButton from "../FavouriteButton";

export default function Spotlight({
  pieces,
  onToggleFavourite,
  artPiecesInfo,
}) {
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    setRandomIndex(randomIndex);
  }, [pieces]);

  const currentPiece = pieces[randomIndex];
  const isFavourite = artPiecesInfo.find(
    (piece) => piece.slug === currentPiece.slug
  )?.isFavourite;

  return (
    <div>
      <Link href={`/art-pieces/${currentPiece.slug}`}>
        <Image
          src={currentPiece.imageSource}
          alt={currentPiece.name}
          height={400}
          width={300}
        />
      </Link>
      <FavouriteButton
        onToggleFavourite={onToggleFavourite}
        slug={currentPiece.slug}
        isFavourite={isFavourite}
      />
      <h3 key={currentPiece.slug}>Spotlight: @{currentPiece.artist}</h3>
    </div>
  );
}

import ColorPalette from "@/components/ColorPalette";
import FavouriteButton from "@/components/FavouriteButton";
import { getNewHeight } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CommentForm from "../CommentForm";
import Comments from "../Comments";

export default function ArtPieceDetails({
  pieces,
  artPiecesInfo,
  onToggleFavourite,
  onSubmitComment,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const currentPiece = pieces.find((piece) => {
    return piece.slug === slug;
  });
  const isFavourite = artPiecesInfo.find(
    (piece) => piece.slug === currentPiece.slug
  )?.isFavourite;

  const comments = artPiecesInfo.find(
    (piece) => piece.slug === currentPiece.slug
  )?.comments;

  return (
    <div>
      <Link href="/art-pages/" aria-label="Go back to art pages">
        Back
      </Link>
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
      <ColorPalette colors={currentPiece.colors} />
      <CommentForm slug={currentPiece.slug} onSubmitComment={onSubmitComment} />
      <Comments comments={comments} />
    </div>
  );
}

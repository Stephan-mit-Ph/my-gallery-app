import ArtPieces from "@/components/ArtPieces";
import Link from "next/link";


const artPiecesInfo = [{isFavorite:""}]

export default function FavoritesPage({ pieces, artPiecesInfo }) {
    
  const favoriteArtPieces = pieces.filter((piece) => artPiecesInfo.isFavorite = true)
    if (favoriteArtPieces){
            return <ArtPieces pieces={pieces} />
    } return null;


}

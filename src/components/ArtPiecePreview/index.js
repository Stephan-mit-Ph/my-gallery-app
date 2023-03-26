import Image from "next/image";

export default function ArtPiecePreview({ imageSource, name, artist }) {
  return (
    <div>
      <Image src={imageSource} alt={name} width={350} height={350} />
      <p>Artist: {artist}</p>
      <p>Name: {name}</p>
    </div>
  );
}

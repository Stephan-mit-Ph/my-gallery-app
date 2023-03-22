import Image from "next/image";

export default function ArtPiecePreview({ imageSource, name, artist }) {
  return (
    <div>
      <Image src={imageSource} alt={name} width={200} height={220} />
      <p>Artist:{artist}</p>
      <p>Name: {name}</p>
    </div>
  );
}

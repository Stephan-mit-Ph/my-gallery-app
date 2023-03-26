import Image from "next/image";

export default function ArtPiecePreview({ imageSource, name, artist }) {
  return (
    <div>
      <Image src={imageSource} alt={name} width={350} height={350} />
      <p><strong>Artist:</strong><br></br> {artist}</p>
      <p><strong>Name:</strong><br></br> {name}</p>
    </div>
  );
}

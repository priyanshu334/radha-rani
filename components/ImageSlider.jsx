import ImageBox from "../components/ImageBox";

export default function ImageSlider() {
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "https://via.placeholder.com/300x200?text=Image+6",
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <ImageBox images={images} />
    </div>
  );
}

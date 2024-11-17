import React from "react";

interface CardProps {
  imageSrc: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text }) => {
  return (
    <div className="max-w-xs w-full rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <img
        src={imageSrc}
        alt={text}
        className="w-full h-auto object-contain" // Adjusts to the natural dimensions of the image
      />
      {/* Text Section */}
      <div className="bg-[#9C7A4D] text-white text-center font-bold  text-lg">
        <p className="py-3">{text}</p>
      </div>
    </div>
  );
};

export default Card;

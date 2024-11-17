'use client';

const ImageContainer = ({ src, alt, width = "full", height = "64" }) => {
  return (
    <div
      className={`relative w-${width} h-${height} bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <p className="text-white font-semibold text-sm">{alt}</p>
      </div>
    </div>
  );
};

export default ImageContainer;

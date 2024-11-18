export default function ImageBox({ images }) {
    return (
      <div className="p-4  max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-40 overflow-hidden rounded-md">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="absolute w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
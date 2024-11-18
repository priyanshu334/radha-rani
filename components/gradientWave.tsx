import React from "react";

const GradientWave = () => {
  return (
    <div className="relative bg-[#9C7A4D] shadow-lg  h-[300px] w-full overflow-hidden">
      {/* Wave SVG at the top */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          {/* Shadow effect on the top */}
          <defs>
            <linearGradient id="shadow-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="black" stopOpacity="0.4" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="50" fill="url(#shadow-gradient)" />
          {/* Wave Path */}
          <path
            fill="#C8AD84"
            d="M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,96C672,117,768,139,864,160C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default GradientWave;

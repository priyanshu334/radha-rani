import React from "react";
const WaveSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
      <svg
        {...props}
        width="1440"
        height="257"
        viewBox="0 0 1440 257"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 145.261L48 153.083C96 160.904 192 176.548 288 201.13C384 225.713 480 257 576 257C672 257 768 225.713 864 216.774C960 208.952 1056 225.713 1152 216.774C1248 208.952 1344 176.548 1392 160.904L1440 145.261V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V145.261Z"
          fill="#C8AD84"
        />
      </svg>
    );
  };
  
  export default WaveSvg;
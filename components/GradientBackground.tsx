import React from "react";
import Page from "./Page";
import Pagefor from "./Pagefor";

const GradientBackground = () => {
  return (
    <div className="relative bg-[#9C7A4D] flex flex-col space-y-40">
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/10 via-black/0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Page/>
        <Pagefor/>
      </div>
    </div>
  );
};

export default GradientBackground;

import CategorySelector from "@/components/CategorySelect";
import Footer from "@/components/Footer";
import GradientWave from "@/components/gradientWave";
import ImageSlider from "@/components/ImageSlider";
import Carousel from "@/components/ImageSlider";
import CircularCarousel from "@/components/ImageSlider";
import Page from "@/components/Page";
import Pagefor from "@/components/Pagefor";
import WaveSvg from "@/components/WaveSvg";

export default function Home() {
  return (
    <div className="bg-[#C8AD84] min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Main Heading */}
        <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[48px] mt-10 text-white leading-tight max-w-4xl">
          Where style speaks, trend resonates and fashion flourishes
        </h1>
        {/* Subheading */}
        <h2 className="font-medium text-[16px] sm:text-[18px] md:text-[20px] mt-6 text-white leading-7 max-w-2xl">
          Unveiling a fashion tradition where every emotion meets. Unveiling a
          fashion tradition where every emotion meets.
        </h2>
      </div>

      {/* Image Slider Section */}
      <div className="mt-12"></div>
      <div className="bg-[#C8AD84] flex flex-col items-center justify-center h-[320px] w-full">
        <h1 className="text-white -mt-28 font-bold text-4xl">
          Explore Our Elegant Designs
        </h1>
        <div className="flex mt-9 space-x-4">
          <CategorySelector />
          <CategorySelector />
        </div>
      </div>

      {/* Pages Section */}
      <div className="bg-[#C8AD84] flex flex-col space-y-40">
        <Page />
        <Pagefor />
      </div>
      
      {/* Gradient Wave */}
      <div className="bg-[#9C7A4D] w-full relative">
  {/* SVG as background or decoration */}
  <img src="./images/Vector.svg" alt="Decorative SVG" className="w-full pb-56  h-auto" />
</div>


      {/* Special Offers Section */}
      <div className="bg-white flex justify-center font-semibold h-[35px]">
        <h1 className="my-2">Special Offers If any</h1>
      </div>

      {/* Footer */}
      <Footer />

      {/* Footer Bottom Section */}
      <div className="bg-[#C8AD84] flex justify-between h-[30px] max-w-full">
        <h1 className="font-medium mx-4 my-1">Copyright © 2024 All rights reserved</h1>
        <h1 className="font-medium mx-4 my-1">Privacy Policy</h1>
      </div>
    </div>
  );
}

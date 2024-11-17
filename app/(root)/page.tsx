import CategorySelector from "@/components/CategorySelect";
import Footer from "@/components/Footer";
import Page from "@/components/Page";
import Pagefor from "@/components/Pagefor";

export default function Home() {
  return (
    <div className="bg-[#C8AD84] min-h-screen ">
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
      {/* Image Slider */}
      <div className="mt-12"></div>
      <div className="bg-[#9C7A4D] flex flex-col items-center justify-center h-[320px] w-full">
        <h1 className="text-white -mt-28   font-bold text-4xl    ">
          Explore Our Elegant Designs
        </h1>
        <div className="flex mt-9 space-x-4">
          <CategorySelector/>
    
        </div>
      </div>

      <div className="bg-[#C8AD84] flex flex-col space-y-40">
        <Page/>
        <Pagefor/>
      </div>
       <Footer/>
    </div>
  );
}

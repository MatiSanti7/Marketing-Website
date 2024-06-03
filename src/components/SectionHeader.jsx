import bgImage from "../assets/image/image-header.webp";
import PropsTypes from "prop-types";

const SectionHeader = ({ refe }) => {
  return (
    <header className="relative h-screen" ref={refe}>
      <img src={bgImage} alt="" className="object-cover w-full h-full" />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-blue-300/70"></div>
      <div className="absolute flex flex-col w-3/5 gap-16 -translate-y-1/3 -translate-x-1/3 top-1/2 left-1/3">
        <p className="font-bold text-white text-7xl">
          Welcome to Our Marketing Solution Boost Your Business with Our
          Advanced Features
        </p>
        <div className="space-x-3 text-3xl">
          <button className="px-10 py-4 transition-all rounded-md hover:shadow-md py-b-4 bg-slate-200 hover:bg-slate-100">
            Learn More
          </button>
          <button className="px-10 py-4 font-medium text-white transition-all bg-blue-300 rounded-md hovershadow-md hover:bg-blue-400 hover:shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

SectionHeader.propTypes = {
  refe: PropsTypes.object,
};

export default SectionHeader;

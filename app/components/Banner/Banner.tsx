import hero from "../../../public/images/hero.png";
import WaveLinesDesktop1 from "../../../public/images/backgrounds/WaveLinesDesktop1.svg";
import WaveLinesDesktop2 from "../../../public/images/backgrounds/WaveLinesDesktop2.svg";
import WaveLinesDesktop3 from "../../../public/images/backgrounds/WaveLinesDesktop3.svg";
import WaveLinesDesktop4 from "../../../public/images/backgrounds/WaveLinesDesktop4.svg";

const Banner = () => {
  return (
    <div className="relative w-full h-screen  bg-[#1C88EE] overflow-hidden flex flex-col md:flex-row items-center ">
      {/* Background SVG Overlays */}
      <div className="absolute inset-0">
        <img src={WaveLinesDesktop1} alt="Background Wave 1" className="absolute w-full h-full object-cover" />
        <img src={WaveLinesDesktop2} alt="Background Wave 2" className="absolute w-full h-full object-cover" />
        <img src={WaveLinesDesktop3} alt="Background Wave 3" className="absolute w-full h-full object-cover" />
        <img src={WaveLinesDesktop4} alt="Background Wave 4" className="absolute w-full h-full object-cover" />
      </div>
      
      {/* Left Content */}
      <div className="relative z-10 flex-1 px-10 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Embrace the Future of Finance
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-80">
          Reimagine financial services with AnyTech’s open platform.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 transition-all rounded-lg text-white font-medium">
          Reach Out to Us
        </button>
      </div>
      
      {/* Right Hero Image with Background and SVG Overlay */}
      <div className="relative z-10 flex-1 flex justify-center md:justify-end mt-10 md:mt-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
  <div className="absolute inset-0">
    <img src={WaveLinesDesktop1} alt="Overlay Wave 1" className="absolute w-full h-full object-cover mix-blend-overlay" />
    <img src={WaveLinesDesktop2} alt="Overlay Wave 2" className="absolute w-full h-full object-cover mix-blend-overlay" />
  </div>
  <img 
    src={hero} 
    alt="Hero" 
    className="w-full max-w-sm md:max-w-md lg:max-w-lg opacity-0" 
   
  />
</div>
<style >{`
        .clip-path-hero {
          clip-path: polygon(50% 0%, 3% 90%, 98% 35%);
        }
      `}</style>
    </div>
  );
};

export default Banner;

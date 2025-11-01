
import TextType from "../../components/TextType";
import LightRays from "@/components/LightRays";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="absolute z-10 inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Yassin
          </h1>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
            El Behi
          </h1>
          <div className="h-px w-16 bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 mx-auto mb-8"></div>
          <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase text-emerald-300">
            Creative Developer
          </h2>
        
          <div className="bg-gray-900/80 backdrop-blur-sm text-emerald-300 font-mono p-6 rounded-lg shadow-lg border border-emerald-900/30 m-8 pointer-events-auto hover:shadow-emerald-900/20 transition-all duration-300">
            <h1>C:\Users\HP&gt;Information technology engineering student</h1>
            <h1>C:\Users\HP&gt;Always learning</h1>
            C:\Users\HP&gt;
            <TextType 
              text={["Full-Stack Development", "UI/UX Design", "Interactive Experiences"]}
              typingSpeed={205}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="▋"
            />
          </div>
        </div>
      </div>

      <LightRays
        raysOrigin="top-center"
        raysColor="#5eead4"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.3}
        noiseAmount={0.5}
        distortion={0.1}
        className="absolute inset-0 z-0"
      />
    </div>
  );
};

export default Hero;
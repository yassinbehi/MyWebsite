
import TerminalHero from "@/components/TerminalHero";
import Beams from "@/components/Beams";
import BlurText from "@/components/BlurText";

const Hero = () => {
  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="absolute z-10 inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="flex justify-center relative">
            {/* Static name that's always visible */}
            
            {/* Animated blur text overlay */}
            <BlurText
              text="Yassin El Behi"
              delay={300}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl font-sans font-light tracking-tight mb-4 bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
            />
          </div>
          <TerminalHero />
          
          
        </div>
      </div>
      
      <div className="absolute inset-0 w-full h-full">
  <Beams
    beamWidth={3}
    beamHeight={15}
    beamNumber={20}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.4}
    rotation={20}
  />
</div>

    </div>
  );
};

export default Hero;
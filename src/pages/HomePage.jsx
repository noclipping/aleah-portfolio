import homebg from "../assets/homebg.png";
import { cyanotypes } from "../data/cyanotypes";

export default function HomePage() {
  return (
    <div>
      {/* Full screen hero section */}
      <div className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={homebg}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main content - Aleah Slish in foreground */}
        <div className="relative z-10 text-center px-4 0">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-extralight text-white tracking-wide leading-tight uppercase"
            style={{ fontFamily: "'Italiana', serif" }}
          >
            ALEAH SLISH
          </h1>
        </div>
      </div>
    </div>
  );
}

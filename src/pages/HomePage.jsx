import CloudImage from "../components/CloudImage";
import { cyanotypes } from "../data/cyanotypes";
import { monoprints } from "../data/monoprints";
import { Link } from "react-router-dom";

export default function HomePage() {
  // Use the first cyanotype as background
  const backgroundImage = cyanotypes[1];
  // Use different images for the sections
  const cyanotypeSectionImage = cyanotypes[5];
  const monoprintSectionImage = monoprints[0];

  return (
    <div>
      {/* Full screen hero section */}
      <div className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background cyanotype image */}
        <div className="absolute inset-0 z-0">
          <CloudImage
            publicId={backgroundImage.id}
            alt={backgroundImage.title}
            className="w-full h-full"
          />
        </div>

        {/* Main content - Aleah Slish in foreground */}
        <div className="relative z-10 text-center px-4 bg-black/80">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white tracking-wide leading-tight"
            style={{ fontFamily: "'Playwrite AU QLD', cursive" }}
          >
            Aleah Slish
          </h1>
        </div>
      </div>

      {/* Collections section */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Cyanotypes half */}
        <Link to="/cyanotypes" className="relative flex-1 group cursor-pointer">
          <div className="absolute inset-0">
            <CloudImage
              publicId={cyanotypeSectionImage.id}
              alt={cyanotypeSectionImage.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0  bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
          </div>

          {/* Text overlay */}
          <div className="bg-black/80 relative z-10 flex items-center justify-center h-full">
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white tracking-wide group-hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "'Playwrite AU QLD', cursive" }}
            >
              Cyanotypes
            </h2>
          </div>
        </Link>

        {/* Monoprints half */}
        <Link to="/monoprints" className="relative flex-1 group cursor-pointer">
          <div className="absolute inset-0">
            <CloudImage
              publicId={monoprintSectionImage.id}
              alt={monoprintSectionImage.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="bg-black/80 absolute inset-0  bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
          </div>

          {/* Text overlay */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2
              className=" text-4xl md:text-6xl lg:text-7xl font-extralight text-white tracking-wide group-hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "'Playwrite AU QLD', cursive" }}
            >
              Monoprints
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

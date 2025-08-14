import CloudImage from "../components/CloudImage";
import { cyanotypes } from "../data/cyanotypes";
import { monoprints } from "../data/monoprints";
import { Link } from "react-router-dom";

export default function PortfolioPage() {
  // Use different images for the sections
  const cyanotypeSectionImage = cyanotypes[1];
  const monoprintSectionImage = monoprints[8];

  return (
    <div className="pt-16">
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
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
          </div>

          {/* Text overlay */}
          <div className="bg-black/80 relative z-10 flex items-center justify-center h-full">
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white tracking-wide group-hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "'Italiana', serif" }}
            >
              CYANOTYPES
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
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
          </div>

          {/* Text overlay */}
          <div className="bg-black/80 relative z-10 flex items-center justify-center h-full">
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white tracking-wide group-hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "'Italiana', serif" }}
            >
              MONOPRINTS
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

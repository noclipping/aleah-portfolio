import Gallery from "../components/Gallery";
import { cyanotypes } from "../data/cyanotypes";

export default function CyanotypesPage() {
  // Reverse the order of cyanotypes
  const reversedCyanotypes = [...cyanotypes].reverse();

  return (
    <div className="pt-24 px-6 md:px-10">
      <Gallery
        artworks={reversedCyanotypes}
        title="Cyanotypes"
        showTitles={false}
      />
    </div>
  );
}

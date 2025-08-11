import Gallery from "../components/Gallery";
import { cyanotypes } from "../data/cyanotypes";

export default function CyanotypesPage() {
  return (
    <div className="pt-24 px-6 md:px-10">
      <Gallery
        artworks={cyanotypes}
        title="Cyanotypes"
        description="Exploring the ethereal blue world of cyanotype photography, where sunlight and chemistry create dreamlike impressions that blur the line between photography and painting."
      />
    </div>
  );
}

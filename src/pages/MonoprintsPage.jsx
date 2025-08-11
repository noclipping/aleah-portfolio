import Gallery from "../components/Gallery";
import { monoprints } from "../data/monoprints";

export default function MonoprintsPage() {
  return (
    <div className="pt-24 px-6 md:px-10">
      <Gallery
        artworks={monoprints}
        title="Monoprints"
        description="Each monoprint is a unique, unrepeatable impression—capturing spontaneous marks, textures, and forms that exist only once, making every piece a singular artistic moment."
        layout="masonry"
      />
    </div>
  );
}

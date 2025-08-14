import Gallery from "../components/Gallery";
import { monoprints } from "../data/monoprints";

export default function MonoprintsPage() {
  return (
    <div className="pt-24 px-6 md:px-10">
      <Gallery artworks={monoprints} title="Monoprints" showTitles={false} />
    </div>
  );
}

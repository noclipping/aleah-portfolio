import Gallery from "../components/Gallery";
import { cyanotypes } from "../data/cyanotypes";
import { monoprints } from "../data/monoprints";

export default function HomePage() {
  // Combine both collections for the home page
  const allArtworks = [
    ...cyanotypes.map((work) => ({ ...work, collection: "Cyanotypes" })),
    ...monoprints.map((work) => ({ ...work, collection: "Monoprints" })),
  ];

  return (
    <Gallery
      artworks={allArtworks}
      title="Selected Works"
      description="A curated collection of cyanotypes and monoprints exploring the intersection of traditional photographic processes and contemporary artistic expression."
    />
  );
}

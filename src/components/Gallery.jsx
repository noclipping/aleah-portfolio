import CloudImage from "./CloudImage";

export default function Gallery({
  artworks,
  title,
  description,
  layout = "grid",
  showTitles = true,
}) {
  return (
    <div>
      <div className="mb-8">
        <h2
          className="text-2xl md:text-3xl font-bold text-white mb-2"
          style={{ fontFamily: "'Italiana', serif" }}
        >
          {title}
        </h2>
        {description && (
          <p className="text-neutral-300 max-w-2xl">{description}</p>
        )}
      </div>

      {layout === "masonry" ? (
        <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.map((artwork) => (
            <figure key={artwork.id} className="group break-inside-avoid mb-6">
              <div className="overflow-hidden rounded-xl">
                <CloudImage
                  publicId={artwork.id}
                  alt={artwork.title}
                  className="w-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {showTitles && (
                <figcaption className="mt-3 text-sm text-neutral-300">
                  {artwork.title}
                </figcaption>
              )}
            </figure>
          ))}
        </section>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {artworks.map((artwork) => (
            <figure key={artwork.id} className="group">
              <div className="overflow-hidden rounded-xl">
                <CloudImage
                  publicId={artwork.id}
                  alt={artwork.title}
                  className="w-full h-auto shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {showTitles && (
                <figcaption className="mt-3 text-sm text-neutral-300">
                  {artwork.title}
                </figcaption>
              )}
            </figure>
          ))}
        </section>
      )}

      {artworks.length === 0 && (
        <div className="text-center py-16 text-neutral-400">
          <p className="text-lg">No artworks found in this collection.</p>
          <p className="text-sm mt-2">
            Images will appear here once uploaded to Cloudinary.
          </p>
        </div>
      )}
    </div>
  );
}

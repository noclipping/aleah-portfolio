import { cldUrl, cldSrcSet } from "../lib/cloudinary";

export default function CloudImage({
  publicId,
  alt,
  widths = [400, 800, 1200, 1600],
  sizes = "(max-width: 768px) 100vw, 800px",
  aspect = null,
  className = "",
}) {
  return (
    <img
      src={cldUrl(publicId, { w: widths[1] })}
      srcSet={cldSrcSet(publicId, widths)}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      style={aspect ? { aspectRatio: String(aspect) } : {}}
      className={className}
    />
  );
}

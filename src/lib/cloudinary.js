const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD;

export function cldUrl(publicId, opts = {}) {
  // Simple format that matches working Cloudinary URLs
  const url = `https://res.cloudinary.com/${CLOUD}/image/upload/${publicId}.jpg`;
  console.log(`🔍 Cloudinary URL: ${url}`);
  console.log(`🔍 Cloud: ${CLOUD}, PublicId: ${publicId}`);
  return url;
}

export function cldSrcSet(publicId, widths = [400, 800, 1200, 1600]) {
  return widths.map(w => `${cldUrl(publicId, { w })} ${w}w`).join(", ");
}

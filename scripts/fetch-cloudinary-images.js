import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '../.env' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function fetchImagesByFolder(folderName) {
  try {
    console.log(`Fetching images from ${folderName} folder...`);
    
    const result = await cloudinary.search
      .expression(`folder:"${folderName}"`)
      .sort_by('created_at','desc')
      .max_results(500)
      .execute();

    const artworks = result.resources.map((resource, index) => {
      // Extract a nice title from the public_id
      const title = resource.public_id
        .split('/')
        .pop() // Get filename
        .replace(/[-_]/g, ' ') // Replace dashes/underscores with spaces
        .replace(/\.[^/.]+$/, '') // Remove file extension
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize
        .join(' ');

      // Calculate aspect ratio from dimensions (if available)
      const aspect = resource.width && resource.height 
        ? resource.width / resource.height 
        : 4/3; // Default aspect ratio

      return {
        id: resource.public_id,
        title: title || `${folderName} ${index + 1}`,
        aspect: Math.round(aspect * 100) / 100 // Round to 2 decimal places
      };
    });

    return artworks;
  } catch (error) {
    console.error(`❌ Error fetching images from ${folderName}:`, error.message);
    console.error('Full error:', error);
    return [];
  }
}

async function generateAllGalleries() {
  try {
    console.log('🎨 Generating gallery data from Cloudinary...\n');

    // Fetch images from each folder
    const cyanotypes = await fetchImagesByFolder('Cyanotypes');
    const monoprints = await fetchImagesByFolder('Monoprints');

    // Generate Cyanotypes file
    const cyanotypesContent = `// Auto-generated from Cloudinary
export const cyanotypes = ${JSON.stringify(cyanotypes, null, 2)};
`;
    fs.writeFileSync('../src/data/cyanotypes.js', cyanotypesContent);
    console.log(`✅ Generated cyanotypes.js with ${cyanotypes.length} images`);

    // Generate Monoprints file
    const monoprintsContent = `// Auto-generated from Cloudinary
export const monoprints = ${JSON.stringify(monoprints, null, 2)};
`;
    fs.writeFileSync('../src/data/monoprints.js', monoprintsContent);
    console.log(`✅ Generated monoprints.js with ${monoprints.length} images`);

    // Generate combined artworks file for backward compatibility
    const allArtworks = [...cyanotypes, ...monoprints];
    const artworksContent = `// Auto-generated from Cloudinary - Combined collection
export const artworks = ${JSON.stringify(allArtworks, null, 2)};
`;
    fs.writeFileSync('../src/data/artworks.js', artworksContent);
    console.log(`✅ Generated artworks.js with ${allArtworks.length} total images\n`);

    // Show preview
    console.log('📋 Preview:');
    console.log('Cyanotypes:', cyanotypes.slice(0, 2));
    console.log('Monoprints:', monoprints.slice(0, 2));
    
  } catch (error) {
    console.error('❌ Error generating galleries:', error.message);
  }
}

generateAllGalleries();

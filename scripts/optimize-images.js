import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public';
const outputDir = 'dist';

const optimizeImages = async () => {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.[^.]+$/, '.webp'));
      
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`✅ Optimized: ${file}`);
    }
  }
};

optimizeImages().catch(console.error);
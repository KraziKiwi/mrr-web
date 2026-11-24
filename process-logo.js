const sharp = require('sharp');

sharp('public/logo.jfif')
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    // iterate over pixels, if color is close to white, make it transparent
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];

      // Threshold for white (adjust if needed, 240 is very light gray/white)
      if (r > 230 && g > 230 && b > 230) {
        data[i+3] = 0; // Set alpha to 0 (transparent)
      }
    }

    return sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: info.channels
      }
    })
    .png()
    .toFile('public/logo-transparent.png');
  })
  .then(() => console.log('Logo processed successfully'))
  .catch(err => console.error('Error processing logo:', err));
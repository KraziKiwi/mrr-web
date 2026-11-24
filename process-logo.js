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

      // Aggressive threshold for white and off-white/gray backgrounds
      if (r > 150 && g > 150 && b > 150) {
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
import sharp from "sharp";

export const formatToPng = (file, options = {}) => {
  const { buffer } = file;
  const { width = 600 } = options;

  return sharp(buffer)
    .resize(width)
    .png()
    .toBuffer()
    .then(data => ({
      data,
      contentType: "image/png"
    }))
    .catch(handleErrors);
};

const handleErrors = err => {
  console.log("Error while processing image: ", err);
};

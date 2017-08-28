import sharp from "sharp";

export const convertImageToData = (file, options = {}) => {
  const { path, mimetype } = file;

  const { width = 600 } = options;

  return sharp(path)
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

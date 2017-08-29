import mongoose from "mongoose";

const Schema = mongoose.Schema;
const IMAGE_MODEL_NAME = "Image";

const descriptionValidator = function(description) {
  return this.db.models[IMAGE_MODEL_NAME]
    .count({ description })
    .then(count => count == 0);
};

const ImageSchema = new Schema({
  description: {
    type: String,
    required: [true, "An image description is required!"],
    validate: [descriptionValidator, "Description already taken"]
  },
  data: { type: Buffer, required: true },
  contentType: { type: String, required: true },
  createdOn: { type: Date, default: Date.now }
});

const ImageModel = conn => conn.model(IMAGE_MODEL_NAME, ImageSchema);

export default ImageModel;

//
// selectors

export const getImageById = (conn, imageId) => {
  const Image = ImageModel(conn);
  return Image.findById(imageId);
};

export const saveImage = (conn, image, description) => {
  image.description = description;
  const Image = ImageModel(conn);
  return Image.create(image);
};

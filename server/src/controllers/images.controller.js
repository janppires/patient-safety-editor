import { formatToPng } from "services/image-processor";
import ImageModel from "models/image";
import { handleError } from "controllers/utils";

export const get = (req, res) => {
  const { imageId } = req.params;
  return ImageModel.findById(imageId)
    .then(image => {
      res.contentType(image.contentType);
      res.send(image.data);
    })
    .catch(handleError(res));
};

export const upload = (req, res) => {
  const { file } = req;
  const { mime } = file;
  const { description } = req.body;
  formatToPng(file)
    .then(image => ImageModel.create({ ...image, description }))
    .then(image => {
      res.json(image._id);
    })
    .catch(handleError(res));
};

export default {
  get,
  upload
};

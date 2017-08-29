import { formatToPng } from "services/image-processor";
import { getImageById, saveImage } from "models/image";
import { handleError } from "controllers/utils";

export const get = conn => {
  return (req, res) => {
    const { imageId } = req.params;
    return getImageById(conn, imageId)
      .then(image => {
        res.contentType(image.contentType);
        res.send(image.data);
      })
      .catch(handleError(res))
      .finally(() => res.end());
  };
};

export const uploadImage = conn => {
  return (req, res) => {
    const { file } = req;
    const { mime } = file;
    const { description } = req.body;
    return formatToPng(file)
      .then(imageData => saveImage(conn, imageData, description))
      .then(image => res.json(image._id))
      .catch(handleError(res))
      .finally(() => {
        res.end();
      });
  };
};

import fs from "fs";
import { convertImageToData } from "services/image-processor";
import ImageModel from "models/image";
import { handleError } from "controllers/utils";

export const get = conn => {
  const Image = ImageModel(conn);
  return (req, res) => {
    const { imageId } = req.params;
    return Image.findById(imageId)
      .then(image => {
        res.contentType(image.contentType);
        res.send(image.data);
      })
      .catch(handleError(res))
      .finally(() => res.end());
  };
};

export const uploadImage = conn => {
  const Image = ImageModel(conn);
  return (req, res) => {
    const { file } = req;
    const { description } = req.body;
    return convertImageToData(file).then(image => {
      image.description = description;
      return Image.create(image)
        .then(newImage => res.json(newImage._id))
        .catch(handleError(res))
        .finally(() => {
          res.end();
          doDeleteFile(file.path);
        });
    });
  };
};

const doDeleteFile = path => {
  fs.unlink(path, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("File deleted successfully!");
  });
};

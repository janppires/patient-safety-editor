import multer from "multer";
import mime from "mime";
import fs from "fs";

const TEMP_IMAGE_FOLDER = "/tmp/patient-safety-editor-images/";

if (!fs.existsSync(TEMP_IMAGE_FOLDER)) {
  fs.mkdirSync(TEMP_IMAGE_FOLDER);
}

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, TEMP_IMAGE_FOLDER);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "." + mime.extension(file.mimetype));
  }
});

export default multer({ storage: storage });

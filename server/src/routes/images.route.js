import express from "express";
import multer from "multer";
import { get, uploadImage } from "controllers/images.controller";

const router = express.Router();
var storage = multer.memoryStorage();
const upload = multer({ storage });

export default dbConn => {
  router.route("/images/:imageId").get(get(dbConn));
  router.route("/images").post(upload.single("image"), uploadImage(dbConn));
  return router;
};

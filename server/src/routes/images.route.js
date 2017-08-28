import express from "express";
import upload from "services/multer-config";
import { get, uploadImage } from "controllers/images.controller";

const router = express.Router();

export default dbConn => {
  router.route("/images/:imageId").get(get(dbConn));
  router.route("/images").post(upload.single("image"), uploadImage(dbConn));
  return router;
};

import express from "express";
import multer from "multer";
import ImagesCtrl from "controllers/images.controller";

const router = express.Router();
var storage = multer.memoryStorage();
const upload = multer({ storage });

router.route("/images/:imageId").get(ImagesCtrl.get);
router.route("/images").post(upload.single("image"), ImagesCtrl.upload);

export default router;

import express from "express";
import PointsCtrl from "controllers/points.controller";

const router = express.Router();

router.route("/points/:pointId").get(PointsCtrl.get).put(PointsCtrl.update);

export default router;

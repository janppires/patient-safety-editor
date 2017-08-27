import express from "express";
import { get } from "controllers/points.controller";

const router = express.Router();

export default dbConn => {
  router.route("/points/:pointId").get(get(dbConn));

  return router;
};

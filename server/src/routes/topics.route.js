import express from "express";
import { getAll, get, create, update } from "controllers/topics.controller";

const router = express.Router();

export default dbConn => {
  router.route("/topics").get(getAll(dbConn)).post(create(dbConn));
  router.route("/topics/:topicId").get(get(dbConn));
  router.route("/topics/:topicId/points/:pointId").put(update(dbConn));

  return router;
};

import express from "express";
import TopicsCtrl from "controllers/topics.controller";

const router = express.Router();

router.route("/topics/:topicId").get(TopicsCtrl.get).put(TopicsCtrl.update);

export default router;

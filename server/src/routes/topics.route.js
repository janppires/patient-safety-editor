import express from "express";
import TopicsCtrl from "controllers/topics.controller";

const router = express.Router();

router.route("/topics").get(TopicsCtrl.getAll).post(TopicsCtrl.create);
router.route("/topics/:topicId").get(TopicsCtrl.get);

export default router;

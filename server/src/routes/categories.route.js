import express from "express";
import CategoriesCtrl from "controllers/categories.controller";

const router = express.Router();

router
  .route("/categories")
  .get(CategoriesCtrl.getAll)
  .post(CategoriesCtrl.create);
router.route("/categories/:categoryId").get(CategoriesCtrl.get);

export default router;

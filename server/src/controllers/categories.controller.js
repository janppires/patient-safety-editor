import mongoose from "mongoose";
import CategoryModel, { findAndSort } from "models/category";
import { handleError } from "controllers/utils";

export const getAll = (req, res) => {
  return findAndSort()
    .then(categories => res.json(categories))
    .catch(handleError(res));
};

export const get = (req, res) => {
  const { categoryId } = req.params;
  return CategoryModel.findById(categoryId)
    .then(category => res.json(category))
    .catch(handleError(res));
};

export const create = (req, res) => {
  const category = req.body;
  return CategoryModel.create(category)
    .then(newCategory => res.json(newCategory))
    .catch(handleError(res));
};

export default {
  getAll,
  get,
  create
};

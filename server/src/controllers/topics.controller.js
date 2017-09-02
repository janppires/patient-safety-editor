import mongoose from "mongoose";
import TopicModel, { findAndSort } from "models/topic";
import { handleError } from "controllers/utils";

export const getAll = (req, res) => {
  return findAndSort().then(topics => res.json(topics)).catch(handleError(res));
};

export const get = (req, res) => {
  const { topicId } = req.params;
  return TopicModel.findById(topicId)
    .then(topic => res.json(topic))
    .catch(handleError(res));
};

export const create = (req, res) => {
  const topic = req.body;
  return TopicModel.create(topic)
    .then(newTopic => res.json(newTopic))
    .catch(handleError(res));
};

export default {
  getAll,
  get,
  create
};

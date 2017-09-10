import { findOneTopic, findOneTopicAndUpdate } from "models/category";
import { handleError } from "controllers/utils";

export const get = (req, res) => {
  const { topicId } = req.params;

  return findOneTopic(topicId)
    .then(topic => res.json(topic))
    .catch(handleError(res));
};

export const update = (req, res) => {
  const { topicId } = req.params;
  const topic = req.body;
  return findOneTopicAndUpdate(topicId, topic)
    .then(() => res.end())
    .catch(handleError(res));
};

export default {
  get,
  update
};

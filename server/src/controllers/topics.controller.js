import TopicModel from "models/topic";
import { handleError } from "controllers/utils";

export const getAll = conn => {
  const Topic = TopicModel(conn);
  return (req, res) => {
    return Topic.find()
      .sort({ createdOn: "desc" })
      .exec((errors, topics) => {
        res.json(topics);
      })
      .catch(handleError(res))
      .finally(() => res.end());
  };
};

export const get = conn => {
  const Topic = TopicModel(conn);
  return (req, res) => {
    const { topicId } = req.params;
    return Topic.findById(topicId)
      .then(topic => res.json(topic))
      .catch(handleError(res))
      .finally(() => res.end());
  };
};

export const create = conn => {
  const Topic = TopicModel(conn);
  return (req, res) => {
    const topic = req.body;
    return Topic.save(topic)
      .then(newTopic => res.json(newTopic))
      .catch(handleError(res))
      .finally(() => res.end());
  };
};

export const update = conn => {
  const Topic = TopicModel(conn);
  return (req, res) => {
    const { pointId } = req.params;
    const point = req.body;
    const conditions = {
      "points._id": pointId
    };
    const changes = {
      $set: {
        "points.$.name": point.name,
        "points.$.items": point.items
      }
    };
    return Topic.findOneAndUpdate(conditions, changes)
      .exec()
      .then((updated, data) => console.log(updated, data))
      .catch(handleError(res))
      .finally(() => res.end());
  };
};

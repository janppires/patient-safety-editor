import TopicModel from "models/topic";
import { handleError } from "controllers/utils";

export const get = conn => {
  const Topic = TopicModel(conn);
  return (req, res) => {
    const { pointId } = req.params;

    const conditions = {
      points: { $elemMatch: { _id: pointId } }
    };

    return Topic.findOne(conditions)
      .then(topic => {
        const points = topic.points.filter(point => point._id == pointId);
        res.json(points[0]);
      })
      .catch(handleError(res))
      .finally(() => res.end());
  };
};

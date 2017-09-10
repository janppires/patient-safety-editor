import { findOnePoint, findOnePointAndUpdate } from "models/category";
import { handleError } from "controllers/utils";

export const get = (req, res) => {
  const { pointId } = req.params;

  return findOnePoint(pointId)
    .then(point => res.json(point))
    .catch(handleError(res));
};

export const update = (req, res) => {
  const { pointId } = req.params;
  const point = req.body;
  return findOnePointAndUpdate(pointId, point)
    .then(() => res.end())
    .catch(handleError(res));
};

export default {
  get,
  update
};

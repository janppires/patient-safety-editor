import mongoose from "mongoose";
import db from "database";
const Schema = mongoose.Schema;

const PointItemSchema = new Schema({
  text: { type: String, required: true },
  image: { type: String }
});

const PointSchema = Schema({
  name: { type: String, required: true },
  items: [PointItemSchema]
});

const TopicSchema = Schema({
  name: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  points: [PointSchema]
});

// Virtual for topic's URL
TopicSchema.virtual("url").get(() => {
  return "/topics/" + this._id;
});

const TopicModel = db.model("Topic", TopicSchema);

export default TopicModel;

//
// selectors

export const findAndSort = () => {
  return TopicModel.find().sort({ createdOn: "desc" }).exec();
};

export const findOnePointAndUpdate = (pointId, point) => {
  const conditions = {
    "points._id": pointId
  };
  const changes = {
    $set: {
      "points.$.name": point.name,
      "points.$.items": point.items
    }
  };
  return TopicModel.findOneAndUpdate(conditions, changes).exec();
};

export const findOnePoint = pointId => {
  const conditions = {
    points: { $elemMatch: { _id: pointId } }
  };
  return TopicModel.findOne(conditions).then(topic => {
    const points = topic.points.filter(point => point._id == pointId);
    return points[0];
  });
};

import mongoose from "mongoose";
import db from "database";
const Schema = mongoose.Schema;

const PointItemSchema = new Schema({
  text: { type: String, required: true },
  image: { type: String }
});

const PointSchema = Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  items: [PointItemSchema]
});

const CategorySchema = Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  points: [PointSchema]
});

// Virtual for category's URL
CategorySchema.virtual("url").get(() => {
  return "/categories/" + this._id;
});

const CategoryModel = db.model("Category", CategorySchema);

export default CategoryModel;

//
// selectors

export const findAndSort = () => {
  return CategoryModel.find().sort({ createdOn: "desc" }).exec();
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
  return CategoryModel.findOneAndUpdate(conditions, changes).exec();
};

export const findOnePoint = pointId => {
  const conditions = {
    points: { $elemMatch: { _id: pointId } }
  };
  return CategoryModel.findOne(conditions).then(category => {
    const points = category.points.filter(point => point._id == pointId);
    return points[0];
  });
};

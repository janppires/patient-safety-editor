import mongoose from "mongoose";

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

export default con => con.model("Topic", TopicSchema);

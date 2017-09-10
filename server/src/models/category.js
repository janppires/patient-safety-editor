import mongoose from "mongoose";
import db from "database";
const Schema = mongoose.Schema;

const TopicItemSchema = new Schema({
  text: { type: String, required: true },
  image: { type: String }
});

const TopicSchema = Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  items: [TopicItemSchema]
});

const CategorySchema = Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  topics: [TopicSchema]
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

export const findOneTopicAndUpdate = (topicId, topic) => {
  const conditions = {
    "topics._id": topicId
  };
  const changes = {
    $set: {
      "topics.$.name": topic.name,
      "topics.$.items": topic.items
    }
  };
  return CategoryModel.findOneAndUpdate(conditions, changes).exec();
};

export const findOneTopic = topicId => {
  const conditions = {
    topics: { $elemMatch: { _id: topicId } }
  };
  return CategoryModel.findOne(conditions).then(category => {
    const topics = category.topics.filter(topic => topic._id == topicId);
    return topics[0];
  });
};

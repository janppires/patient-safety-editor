import mongoose from "mongoose";
import db from "database";

const Schema = mongoose.Schema;
const CATEGORY_MODEL_NAME = "Category";

const TopicItemSchema = new Schema({
  text: { type: String, required: true },
  image: { type: String }
});

const TopicSchema = new Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    items: [TopicItemSchema]
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret, options) => {
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

// TopicSchema Virtuals
TopicSchema.virtual("url").get(function() {
  return "/topics/" + this._id;
});

const categoryNameValidator = function(name) {
  return this.db.models[CATEGORY_MODEL_NAME]
    .count({ name })
    .then(count => count == 0);
};

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "A category name is required!"],
      validate: [categoryNameValidator, "Category name already taken"]
    },
    icon: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
    topics: [TopicSchema]
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret, options) => {
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

// CategorySchema Virtuals
CategorySchema.virtual("nameId").get(function() {
  return this.name.replace(/\s+/g, "-").toLowerCase();
});

CategorySchema.virtual("url").get(function() {
  return "/categories/" + this._id;
});

const CategoryModel = db.model("Category", CategorySchema);

export default CategoryModel;

//
// selectors

export const findAndSort = () => {
  return CategoryModel.find().sort({ createdOn: "asc" }).exec();
};

export const findCategoryAndInsertTopic = (categoryId, topic) => {
  const changes = {
    $push: { topics: topic }
  };

  return CategoryModel.findByIdAndUpdate(categoryId, changes, { new: true });
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

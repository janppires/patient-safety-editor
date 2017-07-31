import { normalize, schema } from "normalizr";
export const FETCH_TOPICS = "TOPICS/FETCH";
export const ADD_TOPIC = "TOPICS/ADD";

const topic = new schema.Entity("topics");
const topicsSchema = [topic];
const topics = [
  { id: 1, name: "funny topic", points: [{}] },
  { id: 2, name: "other", points: [{}] }
];

export const fetchTopics = () => {
  return {
    type: FETCH_TOPICS,
    payload: normalize(topics, topicsSchema)
  };
};

export const addTopic = topic => {
  return {
    type: ADD_TOPIC,
    payload: topic
  };
};

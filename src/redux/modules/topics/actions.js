import { normalize, schema } from 'normalizr';
export const FETCH_TOPICS = 'TOPICS/FETCH';
export const SET_SELECTED_TOPIC = 'TOPICS/SET_SELECTED';
export const GET_SELECTED_TOPIC = 'TOPICS/GET_SELECTED';

const topic = new schema.Entity('topics');
const topicsSchema = [ topic ];
const topics = [
  {id: 1, name: 'funny topic', points: [{}]},
  {id: 2, name: 'other', points: [{}]}
]

export const fetchTopics = () => {
  return {
    type: FETCH_TOPICS,
    payload: normalize(topics, topicsSchema)
  }
}

export const setSelectedTopic = (topicId) => {
  return {
    type: SET_SELECTED_TOPIC,
    payload: topicId
  }
}
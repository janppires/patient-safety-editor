import { normalize, schema } from 'normalizr';
export const GET_TOPICS = 'GET_TOPICS';

const topic = new schema.Entity('topics');
const topicsSchema = [ topic ];
const topics = [

]

export function getTopics() {
  return {
    type: GET_TOPICS,
    payload: normalize(topics, topicsSchema)
  }
}
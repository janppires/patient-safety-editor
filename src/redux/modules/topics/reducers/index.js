import { combineReducers } from 'redux';

import list from './list';
import byId from './byId';

const topics = combineReducers({
  byId,
  list,
})

export default topics;
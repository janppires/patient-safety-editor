import { combineReducers } from 'redux';
import topics from './topics/reducers';

const rootReducer = combineReducers({
    topics
})

export default rootReducer;
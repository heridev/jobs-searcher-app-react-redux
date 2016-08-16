import {combineReducers} from 'redux';
import jobs from './jobReducer';

// only one key because a ES6 sorthand property names in this case
const rootReducer = combineReducers({
  jobs
});

export default rootReducer;

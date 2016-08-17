import {combineReducers} from 'redux';
import jobs from './jobReducer';
import currentJob from './singleJobReducer';

// only one key because a ES6 sorthand property names in this case
const rootReducer = combineReducers({
  jobs,
  currentJob
});

export default rootReducer;

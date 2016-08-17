import * as types from '.././actions/actionTypes';

export default function jobReducer(state = [], action) {
  switch (action.type) {

    case types.LOAD_JOBS_SUCCESS:
      return action.jobs;

    default:
      return state;
  }
}

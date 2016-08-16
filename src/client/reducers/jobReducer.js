import * as types from '.././actions/actionTypes';

export default function jobReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_JOB:
      return [...state, Object.assign({}, action.job)];

    case types.LOAD_JOBS_SUCCESS:
      return action.jobs;

    default:
      return state;
  }
}

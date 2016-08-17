import * as types from '.././actions/actionTypes';

export default function singleJobReducer(state = {}, action) {
  switch (action.type) {
    case types.CREATE_JOB:
      return [...state, Object.assign({}, action.job)];

    case types.RETRIEVE_JOB_SUCCESS:
      return action.job;

    default:
      return state;
  }
}

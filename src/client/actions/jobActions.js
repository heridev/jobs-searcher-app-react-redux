import * as types from './actionTypes';
import toastr from 'toastr';

export function createJob(job) {
  return { type: types.CREATE_JOB, job };
}

export function loadJobsSuccess(jobs) {
  return { type: types.LOAD_JOBS_SUCCESS, jobs: jobs};
}

export function loadJobs() {
  return function(dispatch, getState) {
    let state = getState();
    let url = "http://jobs-api-rails-5.herokuapp.com/jobs";

    return fetch(url)
    .then(function(result) {

      if (result.status === 200) {
        return result.json();
      }

      throw "request failed";
    })
    .then(function(jsonResult) {
      dispatch(loadJobsSuccess(jsonResult));
    })
    .catch(function(err) {
      toastr.error('An error ocurred while fetching available jobs', 'Error!');
    });
  };
}

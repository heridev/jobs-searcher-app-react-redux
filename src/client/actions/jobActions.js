import * as types from './actionTypes';
import toastr from 'toastr';

export function loadJobsSuccess(jobs) {
  return { type: types.LOAD_JOBS_SUCCESS, jobs: jobs};
}

export function loadJobs() {
  return function(dispatch, getState) {
    let url = "http://jobs-api-rails-5.herokuapp.com/jobs";

    return fetch(url)
           .then(function(result) {

             if (result.status === 200) {
               return result.json();
             }

             toastr.error('An error ocurred while fetching available jobs', 'Error!');
           })
           .then(function(jsonResult) {
             dispatch(loadJobsSuccess(jsonResult));
           })
           .catch(function(err) {
             toastr.error('An error ocurred while fetching available jobs', 'Error!');
           });
  };
}



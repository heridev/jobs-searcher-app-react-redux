import * as types from './actionTypes';
import toastr from 'toastr';

export function createJob(job) {
  return { type: types.CREATE_JOB, job };
}

export function retrieveJobSuccess(job) {
  return { type: types.RETRIEVE_JOB_SUCCESS, job };
}

export function findJob(jobId) {
  return function(dispatch, getState) {
    let url = "http://jobs-api-rails-5.herokuapp.com/jobs/" + jobId;

    return fetch(url)
           .then(function(result) {

             if (result.status === 200) {
               return result.json();
             }

             toastr.error('An error ocurred while fetching available jobs', 'Error!');
           })
           .then(function(jsonResult) {
             dispatch(retrieveJobSuccess(jsonResult));
           })
           .catch(function(err) {
             toastr.error('An error ocurred while fetching available jobs', 'Error catch!');
           });
    };
}


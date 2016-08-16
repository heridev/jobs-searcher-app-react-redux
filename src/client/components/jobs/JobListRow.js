//it is just a presentational view
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const JobListRow = ({job}) => {
  return(
    <div className="col-md-4">
      <div className="job-list-element">
        <Link to="jobs">
          <p><strong>{job.title}</strong></p>
        </Link>
        <p>Location</p>
        <p>Start date</p>
      </div>
    </div>
  );
}

JobListRow.propTypes = {
  job: PropTypes.object.isRequired
};

export default JobListRow;

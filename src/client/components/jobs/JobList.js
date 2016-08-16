//it is just a presentational view
import React, {PropTypes} from 'react';
import JobListRow from './JobListRow';

const JobList = ({jobs}) => {
  return(
    <div>
      {jobs.map(job =>
        <JobListRow key={job.id} job={job} />
      )}
    </div>
  );
};

JobList.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default JobList;

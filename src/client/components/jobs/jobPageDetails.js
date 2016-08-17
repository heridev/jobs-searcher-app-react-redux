import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as singleJobActions from '../../actions/singleJobActions';
import {bindActionCreators} from 'redux';

class JobPageDetails extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    let jobId = this.props.params.jobId;
    if(jobId) {
      this.props.actions.findJob(jobId);
    }
  }

  render() {
    let job = this.props.job;
    return (
      <div className="job-detail-page">
        <h2><strong>{job.title}</strong></h2>
        <p><strong>Location: </strong> {job.location} </p>
        <p><strong>Salary: </strong> {job.salary} </p>
        <p><strong>Start date: </strong>{job.start_date}</p>
        <p><strong>Details: </strong>{job.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    job: state.currentJob
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(singleJobActions, dispatch)
  };
}

JobPageDetails.propTypes = {
  params: PropTypes.object,
  job: PropTypes.object,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPageDetails);

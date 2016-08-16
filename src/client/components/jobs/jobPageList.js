import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as jobActions from '../../actions/jobActions';
import {bindActionCreators} from 'redux';
import JobList from '.././jobs/JobList';

class JobPageList extends React.Component {

  componentDidMount() {
    this.props.actions.loadJobs();
  }

  render() {
    return (
      <div className="job-list-container">
        <h2>Job list</h2>
        <JobList jobs={this.props.jobs}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    jobs: state.jobs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jobActions, dispatch)
  };
}

JobPageList.propTypes = {
  jobs: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPageList);

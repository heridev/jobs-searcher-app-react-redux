import React from 'react';
import {Link} from 'react-router';

class JobPageDetails extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Jobs page details goes here .....</h1>
        <Link to="/" className="btn btn-primary btn-lg">Go to main listing</Link>
      </div>
    );
  }
}

export default JobPageDetails;

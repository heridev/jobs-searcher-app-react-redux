import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron homepage">
        <h1>Welcome to Jobs.com</h1>
        <Link to="jobs" className="btn btn-primary btn-lg">Check available jobs</Link>
      </div>
    );
  }
}

export default HomePage;

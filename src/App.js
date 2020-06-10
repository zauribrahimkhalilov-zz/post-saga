import React, { Component } from 'react';
import PostListContainer from './containers/PostListContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Posts</h1>
            <PostListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
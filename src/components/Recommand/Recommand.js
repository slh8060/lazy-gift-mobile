import React from 'react';
import Navbar from '../Layout/Navbar';
import RecommandList from '../Layout/RecommandList';

class Recommand extends React.Component {

  render() {
    return (
      <div>
        <Navbar title="推荐" />
        <RecommandList />
      </div>
    );
  }
}

export default Recommand;

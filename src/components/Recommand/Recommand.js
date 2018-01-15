import React from 'react';
import Navbar from '../Layout/Navbar';
import ListItem from './ListItem';

class Recommand extends React.Component {

  render() {
    return (
      <div>
        <Navbar title="推荐" />
        <ListItem />
      </div>
    );
  }
}

export default Recommand;

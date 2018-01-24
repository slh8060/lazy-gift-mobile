import React from 'react';
import Navbar from '../Layout/Navbar';
import ListItem from './ListItem';

class Recommand extends React.Component {


  render() {
    return (
      <Navbar title="推荐" back="false">
        <ListItem />
      </Navbar>
    );
  }
}

export default Recommand;

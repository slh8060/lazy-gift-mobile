import React from 'react';
import Navbar from '../Layout/Navbar';
import MyItem from './MyItem';

class My extends React.Component {
  render() {
    return (
      <Navbar title="我的">
        <MyItem />
      </Navbar>
    );
  }
}

export default My;

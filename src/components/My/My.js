import React from 'react';
import Navbar from '../Layout/Navbar';
import MyItem from './MyItem';

class My extends React.Component {
  render() {
    return (
      <div>
        <Navbar title="我的" />
        <MyItem />
      </div>
    );
  }
}

export default My;

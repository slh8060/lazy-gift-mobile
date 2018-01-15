import React from 'react';
import { connect } from 'dva';
import Navbar from '../../components/Layout/Navbar';
import MyMessage from '../../components/Message/Message';

const Message = () => {
  return (
    <div>
      <Navbar title="我的消息" />
      <MyMessage />
    </div>
  );
};

export default connect()(Message);

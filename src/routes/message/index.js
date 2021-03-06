import React from 'react';
import {connect} from 'dva';
import Navbar from 'components/Layout/Navbar';
import MyMessage from 'components/Message/Message';

const Message = () => {
  return (
    <Navbar title="我的消息" back="true">
      <MyMessage/>
    </Navbar>
  );
};

export default connect()(Message);

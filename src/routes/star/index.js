import React from 'react';
import { connect } from 'dva';
import Navbar from '../../components/Layout/Navbar';
import StarList from '../../components/Layout/StarList';

const Star = () => {
  return (
    <div>
      <Navbar title="我的收藏" />
      <StarList />
    </div>
  );
};

export default connect()(Star);

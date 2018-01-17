import React from 'react';
import {connect} from 'dva';
import Navbar from 'components/Layout/Navbar';
import DetailCon from '../../components/Detail/Detail';

const Detail = () => {
  return (
    <div>
      <Navbar title="详情" back="true"/>
      <DetailCon />
    </div>
  );
};

export default connect()(Detail);

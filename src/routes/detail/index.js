import React from 'react';
import {connect} from 'dva';
import Navbar from 'components/Layout/Navbar';
import DetailCon from '../../components/Detail/Detail';

const Detail = () => {
  return (
    <Navbar title="详情" back="true">
      <DetailCon/>
    </Navbar>
  );
};

export default connect()(Detail);

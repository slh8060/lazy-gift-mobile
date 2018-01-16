import React from 'react';
import { connect } from 'dva';

import MainLayout from './mainlayout';

const Main = ({ dispatch }) => {
  return (
    <div>
      <MainLayout />
    </div>
  );
};


export default connect()(Main);

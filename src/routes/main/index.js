import React from 'react';
import { connect } from 'dva';

import MainLayout from './mainlayout';

const Main = () => {
  return (
    <div>
      <MainLayout />
    </div>
  );
};


export default connect()(Main);

import React from 'react';
import { connect } from 'dva';


import MainLayout from '../../components/Layout/Main';

const Main = () => {
  return (
    <div>
      <MainLayout />
    </div>
  );
};

export default connect()(Main);

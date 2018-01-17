import React from 'react';
import { connect } from 'dva';
import Navbar from 'components/Layout/Navbar';
import MyInfoItem from 'components/MyInfo/MyInfo';
import style from './index.less';


const MyInfo = () => {
  return (
    <div className={style.myInfoWrap}>
      <Navbar title="个人信息" />
      <MyInfoItem />
    </div>
  );
};

export default connect()(MyInfo);

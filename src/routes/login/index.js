import React from 'react';
import {connect} from 'dva';

import styles from './index.less';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.top}>
        <p className={styles.title}>懒人日记</p>
        <p className={styles.remark}>一个专为懒人而生的app</p>
      </div>

      <div className={styles.middle}>
        登录后可以进行评论.收藏.点赞
      </div>

      <div className={styles.bottom}>
        <div className={styles.tip}>第三方登录</div>
        <button className={styles.loginBtn}>
          <img className={styles.btnimg} src="/assets/weixin.png" alt="" />
        </button>
        <button>
          <img className={styles.btnimg} src="/assets/qq.png" alt="" />
        </button>
      </div>

    </div>
  );
};

export default connect()(Login);

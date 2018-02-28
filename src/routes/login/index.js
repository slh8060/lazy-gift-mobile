import React from 'react';
import {connect} from 'dva';
import {Link} from 'react-router-dom';
import styles from './index.less';

function Login({ dispatch, loginResult }) {
  function login() {
    dispatch({
      type: 'login/login',
      payload: {
        username: 'slh',
        userpwd: '123',
      },
    });
  }

  if (loginResult.code === 200) {
    alert('登录成功！');
    window.location.href = '/main';
  }

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
          <img className={styles.btnimg} src="/assets/weixin.png" alt="" onClick={login.bind(null)}/>
        </button>
        <button>
          <img className={styles.btnimg} src="/assets/qq.png" alt="" onClick={login.bind(null)} />
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const {loginResult} = state.login;
  return {
    loginResult,
  };
}

export default connect(mapStateToProps)(Login);

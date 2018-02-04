import React from 'react';
import { connect } from 'dva';
import IndexPage from './IndexPage';
import styles from './IndexPage.css';


function LoginPage() {
  return (
    <div className={styles.normal}>
      LoginPage
      <IndexPage />
    </div>
  );
}

LoginPage.propTypes = {
};

export default connect()(LoginPage);

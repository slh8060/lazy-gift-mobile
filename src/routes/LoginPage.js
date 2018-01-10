import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function LoginPage() {
  return (
    <div className={styles.normal}>
      LoginPage
    </div>
  );
}

LoginPage.propTypes = {
};

export default connect()(LoginPage);

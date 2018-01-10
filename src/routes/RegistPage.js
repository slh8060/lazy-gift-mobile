import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function RegistPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      RegistPage
    </div>
  );
}

RegistPage.propTypes = {
};

export default connect()(RegistPage);

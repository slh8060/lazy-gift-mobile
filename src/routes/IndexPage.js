import React from 'react';
import { Link } from 'dva/router';
import {connect} from 'dva';
import style from './IndexPage.css';


function IndexPage() {
  return (
    <div>
      {/*<p className="title welcome">4rw</p>*/}
      <Link to="/login">
        <p className={`${style.title} ${style.welcome}`}>ssadfasf</p>
      </Link>
    </div>
  );
}

IndexPage.propTypes = {};

export default IndexPage;

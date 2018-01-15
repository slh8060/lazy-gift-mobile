import React from 'react';
import { NavBar } from 'antd-mobile';
import style from './Navbar.less';

const Navbar = () => ({
  render() {
    return (
      <div className={style.nbCon}>
        <NavBar mode="light">
          {this.props.title}
        </NavBar>
      </div>
    );
  },
});

export default Navbar;

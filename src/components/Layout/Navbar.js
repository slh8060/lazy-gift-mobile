import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import style from './Navbar.less';

const Navbar = () => ({
  render() {
    const isLocalMode = window.location.port;
    const linkUrl = isLocalMode ? '' : 'kitchen-sink/';

    return (
      <div className={style.nbCon}>
        <NavBar
          mode="light"
          icon={this.props.back === 'true' ? <Icon style={{ color: '#999' }} type="left" /> : ''}
          onLeftClick={this.props.back === 'true' ? () => { window.location = `/${linkUrl}${window.location.search}`; } : ''}
        >
          {this.props.title}
        </NavBar>

      </div>
    );
  },
});

export default Navbar;

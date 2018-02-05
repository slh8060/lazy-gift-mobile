import React from 'react';
import { connect } from 'dva';
import ListItem from './ListItem';
import style from './List.less';


const StarList = () => ({
  render() {
    return (
      <div className={style.lsCon}>
        <ListItem label={<span>取消</span>} />
      </div>
    );
  },
});

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StarList);

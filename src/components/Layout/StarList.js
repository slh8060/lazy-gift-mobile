import React from 'react';
import ListItem from './ListItem';
import style from './List.less';


const StarList = () => ({
  render() {
    return (
      <div className={style.lsCon}>
        <ListItem label={<span>取消</span>} />
        <ListItem label={<span>取消</span>} />
        <ListItem label={<span>取消</span>} />
      </div>
    );
  },
});

export default StarList;

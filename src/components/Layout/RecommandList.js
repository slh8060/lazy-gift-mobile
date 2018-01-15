import React from 'react';
import ListItem from './ListItem';
import style from './List.less';


const RecommandList = () => ({
  render() {
    return (
      <div className={style.lsCon}>
        <ListItem label={<img className={style.share} src="/assets/share.png" alt="" />} />
        <ListItem label={<img className={style.share} src="/assets/share.png" alt="" />} />
        <ListItem label={<img className={style.share} src="/assets/share.png" alt="" />} />
      </div>
    );
  },
});

export default RecommandList;

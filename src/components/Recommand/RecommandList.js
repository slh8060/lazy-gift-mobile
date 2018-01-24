import React from 'react';
import { connect } from 'dva';
import ListItem from './ListItem';
import style from './ListItem.less';


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

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(RecommandList);

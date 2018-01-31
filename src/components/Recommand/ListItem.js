import React from 'react';
import {connect} from 'dva';
import {Link} from 'react-router-dom';
import style from './ListItem.less';

function ListItem({dispatch, list: dataSource}) {

  // 进入详情页
  function goDetail(detailId) {

    dispatch({
      type: 'detail/fetch',
      payload: detailId,
    });
  }

  const recommandList = dataSource.result.map((item) => {
    return (
      <div className={style.lsitemCon} key={item.id}>
        <Link to="/detail" >
          <div className={style.lstop} onClick={goDetail.bind(null, item.id)}>
            <div className={style.lstopLf}>
              <img className={style.psImg} src="/assets/person.png" alt=""/>
              <div className={style.lsDtl}>
                <p className={style.name}>{item.name}</p>
                <p className={style.title}>{item.title}</p>
              </div>
            </div>
            <p className={style.label}>
              <img className={style.share} src="/assets/share.png" alt=""/>
            </p>
          </div>
        </Link>
        <div className={style.lsmdl}>
          {
            item.items.map((items) => {
              return (
                <span key={items.detail_level}>{items.detail_level}:{items.brief};</span>
              );
            })
          }
        </div>
        <div className={style.lsbtm}>
          <span className={style.time}>{item.date}</span>
          <div className={style.lsRg}>
            <div className={style.starCon}>
              <img className={style.starImg} src="/assets/star.png" alt=""/>
              <span className={style.starNum}>100{item.agree_count}</span>
            </div>
            <div className={style.starCon}>
              <img className={style.starImg} src="/assets/unstar.png" alt=""/>
              <span className={style.starNum}>50{item.unagree_count}</span>

            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={style.lsCon}>
      {recommandList}
    </div>
  );
}

function mapStateToProps(state) {
  const { list } = state.recommand;
  console.log('map:',list);
  return {
    list,
  };
}

export default connect(mapStateToProps)(ListItem);

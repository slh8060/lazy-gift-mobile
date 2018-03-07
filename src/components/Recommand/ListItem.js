import React from 'react';
import {connect} from 'dva';
import {Link} from 'react-router-dom';
import style from './ListItem.less';

function ListItem({dispatch, list: dataSource, approveResult}) {

  // 进入详情页
  function goDetail(detailId) {
    dispatch({
      type: 'detail/fetch',
      payload: detailId,
    });
  }

  // 赞
  function approve(detailId, isApprove, index) {
    console.log('index', index);
    dispatch({
      type: 'recommand/approve',
      payload: {
        detailId: detailId,
        userId: 5,
        isApprove: isApprove,
        index: index,
      },
    });
  }

  const recommandList = dataSource.result.map((item, index) => {
    return (
      <div className={style.lsitemCon} key={item.id}>
        <div onClick={goDetail.bind(null, item.id)}>
          <div className={style.lstop}>
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
          <div className={style.lsmdl}>
            {
              item.items.map((items) => {
                return (
                  <span key={items.detail_level}>{items.detail_level}:{items.brief};</span>
                );
              })
            }
          </div>
        </div>

        <div className={style.lsbtm}>
          <span className={style.time}>{item.date}</span>
          <div className={style.lsRg}>
            <div className={style.starCon}>
              {
                item.is_approve === 1 ? (
                  <i className={`iconfont icon-like-o ${style.test}`} onClick={approve.bind(null, item.id, 0, index)}/>
                ) : (
                  <i className={`iconfont icon-like ${style.test}`} onClick={approve.bind(null, item.id, 1, index)}/>
                )
              }
              <span className={style.starNum}>{item.agree_count}</span>
            </div>
            <div className={style.starCon}>
              {
                item.is_approve === -1 ? (
                  <i className={`iconfont icon-dislike-o ${style.test}`} onClick={approve.bind(null, item.id, 0, index)}/>
                ) : (
                  <i className={`iconfont icon-dislike ${style.test}`} onClick={approve.bind(null, item.id, -1, index)}/>
                )
              }
              <span className={style.starNum}>{item.unagree_count}</span>
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
  const {list, approveResult} = state.recommand;
  console.log('map:', state.recommand);
  return {
    list,
    approveResult,
  };
}

export default connect(mapStateToProps)(ListItem);

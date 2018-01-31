import React from 'react';
import {connect} from 'dva';
import style from './Detail.less';

function CommentList({commentList}) {
  let commentlistCom = null;
  if (commentList.length > 0) {
    commentlistCom = commentList.map((item) => {
      return (
        <div className={style.commentItem} key={item.id}>
          <div className={style.commentTop}>
            <div className={style.lstopLf}>
              <img className={style.psImg} src="/assets/person.png" alt=""/>
              <div className={style.lsDtl}>
                <p className={style.replyname}>{item.name}</p>
                <p className={style.time}>item.date</p>
              </div>
            </div>
            <p className={style.heartWrap}>
              <img className={style.heartImg} src="/assets/unstar.png" alt=""/>
              <span className={style.heartNum}>{item.like_count}</span>
            </p>
          </div>
          <div className={style.commentBtm}>
            <p>{item.content}</p>
            {typeof item.reply !== 'undefined' && <div> {
              item.reply.map((replyItem) => {
                return (
                  <p className={style.replyItem} key={replyItem.id}>
                    <span className={style.rpyName}>{replyItem.owner_user_name}</span>
                    <span>回复</span>
                    <span className={style.rpyName}>{replyItem.target_user_name}:</span>
                    <span className={style.rpyCon}>{replyItem.content}</span>
                  </p>
                );
              })
            }</div>}
          </div>
        </div>
      );
    });
  } else {
    commentlistCom = <p>暂时任何没有评论</p>;
  }
  return (
    <div className={style.detailBtm}>
      {commentlistCom}
    </div>
  );
}

function mapStatetoProps(state) {
  const {commentList} = state.detail;
  return {
    commentList,
  };
}

export default connect(mapStatetoProps)(CommentList);

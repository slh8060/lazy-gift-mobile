import React from 'react';
import style from './My.less';

const MyItem = () => ({
  render() {
    return (
      <div className={style.myCon}>
        <div className={style.myDtl}>
          <div className={style.dtlLf}>
            <img className={style.myImg} src="/assets/person.png" alt="" />
            <div className={style.assignCon}>
              <p className={style.myName}>linpenw</p>
              <p className={style.myassign}>
                <span>签名:</span>
                <span className={style.assignDtl}>我胡汉三又回来了</span>
              </p>
            </div>
          </div>

          <img className={style.dtlGo} src="/assets/rgarrow.png" alt="" />
        </div>
        <div className={style.myItem}>
          <div className={style.itemLf}>
            <img className={style.itemImg} src="/assets/heart.png" alt="" />
            <p>我的收藏</p>

          </div>
          <img className={style.dtlGo} src="/assets/rgarrow.png" alt="" />
        </div>
        <div className={style.myItem}>
          <div className={style.itemLf}>
            <img className={style.itemImg} src="/assets/message.png" alt="" />
            <p>我的消息</p>

          </div>
          <img className={style.dtlGo} src="/assets/rgarrow.png" alt="" />
        </div>


      </div>
    );
  },
});

export default MyItem;

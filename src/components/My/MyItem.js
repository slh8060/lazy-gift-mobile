import React from 'react';
import {Link} from 'react-router-dom';
import style from './My.less';

const MyItem = ({dispatch}) => {

  function handleOk() {
    alert('222');
    dispatch({type: 'mystar/mystar'});

  }

  return (
    <div className={style.myCon}>
      <Link to="myinfo">
        <div className={style.myDtl}>
          <div className={style.dtlLf}>
            <img className={style.myImg} src="/assets/person.png" alt=""/>
            <div className={style.assignCon}>
              <p className={style.myName}>linpenw</p>
              <p className={style.myassign}>
                <span>签名:</span>
                <span className={style.assignDtl}>我胡汉三又回来了</span>
              </p>
            </div>
          </div>

          <img className={style.dtlGo} src="/assets/rgarrow.png" alt=""/>
        </div>
      </Link>

      <Link to="/star">
        <div className={style.myItem} href="/star">
          <div className={style.itemLf}>
            <img className={style.itemImg} src="/assets/heart.png" alt=""/>
            <p className={style.itemGo} href="/star">我的收藏</p>

          </div>
          <img className={style.dtlGo} src="/assets/rgarrow.png" alt=""/>
        </div>
      </Link>

      <Link to="/message">
        <div className={style.myItem}>
          <div className={style.itemLf}>
            <img className={style.itemImg} src="/assets/message.png" alt=""/>
            <p className={style.itemGo}>我的消息</p>
          </div>
          <img className={style.dtlGo} src="/assets/rgarrow.png" alt=""/>
        </div>
      </Link>


    </div>
  );
};

export default MyItem;

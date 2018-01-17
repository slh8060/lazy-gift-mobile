import React from 'react';
import style from './MyInfo.less';

class MyInfo extends React.Component {
  render() {
    return (
      <div className={style.myCon}>
        <div className={style.myDtl}>
          <div className={style.dtlLf}>
            <img className={style.myImg} src="/assets/person.png" alt=""/>
            <div className={style.assignCon}>
              <p className={style.myName}>linpenw</p>
              <p className={style.myassign}>
                <span className={style.assignDtl}>点击修改图像</span>
              </p>
            </div>
          </div>

          <img className={style.dtlGo} src="/assets/rgarrow.png" alt=""/>
        </div>

        <div className={style.myItem} href="/star">
          <div className={style.itemLf}>
            <span className={style.itemGo} href="/star">昵称</span>
          </div>
          <div className={style.itemLf}>
            <p>胡汉三</p>
            <img className={style.dtlGo} src="/assets/rgarrow.png" alt=""/>
          </div>
        </div>
        <div className={style.myItem}>
          <div className={style.itemLf}>
            <span className={style.itemGo}>签名</span>
          </div>
          <div className={style.itemLf}>
            <p>我胡汉三又回来啦</p>
            <img className={style.dtlGo} src="/assets/rgarrow.png" alt=""/>
          </div>
        </div>

        <div className={style.exit}>
          <button className={style.exitBtn}>退出登录</button>
        </div>


      </div>

    );
  }
}

export default MyInfo;

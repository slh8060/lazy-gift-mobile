import React from 'react';
import { Link } from 'react-router-dom';
import style from './List.less';

const ListItem = () => ({
  render() {
    return (
      <div className={style.lsitemCon}>
        <div className={style.lstop}>
          <div className={style.lstopLf}>
            <img className={style.psImg} src="/assets/person.png" alt=""/>
            <div className={style.lsDtl}>
              <p className={style.name}>linpengwu</p>
              <p className={style.title}>去烧烤要带什么东西？(全方位)</p>
            </div>

          </div>
          <p className={style.label}>
            {this.props.label}
          </p>
        </div>
        <Link to="/detail">
          <div className={style.lsmdl}>
            1.烧烤工具；2.烧烤主食；3.烧烤调味品；4.代步工具；5.娱乐节目
          </div>
        </Link>

        <div className={style.lsbtm}>
          <span className={style.time}>2小时前</span>
          <div className={style.lsRg}>
            <div className={style.starCon}>
              <img className={style.starImg} src="/assets/star.png" alt=""/>
              <span className={style.starNum}>100</span>
            </div>
            <div className={style.starCon}>
              <img className={style.starImg} src="/assets/unstar.png" alt=""/>
              <span className={style.starNum}>100</span>

            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default ListItem;

import React from 'react';
import {connect} from 'dva';
import { Link } from 'react-router-dom';
import style from './List.less';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: props.starList,
    };
  }
  render() {
    const starList = this.state.starList.starList.result;
    const starItem = starList.map((item) => {
      return (
        <div key={item.id}>
          <div className={style.lstop}>
            <div className={style.lstopLf}>
              <img className={style.psImg} src="/assets/person.png" alt=""/>
              <div className={style.lsDtl}>
                <p className={style.name}>linpengwu</p>
                <p className={style.title}>{item.title}</p>
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
    });
    return (
      <div className={style.lsitemCon}>
        {starItem}
      </div>
    );
  }
}
function mapStateToProps(state){
  const { starList } = state.star;
  console.log('111', starList);
  return {
    starList,
  };
}

export default connect(mapStateToProps)(ListItem);

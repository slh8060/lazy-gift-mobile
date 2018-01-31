import React from 'react';
import style from './Detail.less';

class DetailList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      detailListResult: props.detailList,
      dispatch: props.dispatch,
    };
  }
  render() {
    const detailListResult = this.state.detailListResult.result;
    return (
      <div>
        <div className={style.lstop}>
          <div className={style.lstopLf}>
            <img className={style.psImg} src="/assets/person.png" alt=""/>
            <div className={style.lsDtl}>
              <p className={style.name}>{detailListResult.name}</p>
              <p className={style.time}>{detailListResult.date}</p>
            </div>
          </div>
          <p className={style.label}>
            <img src="/assets/share.png" alt="" />
          </p>
        </div>
        <div className={style.detailMdl}>
          <p className={style.ttl}>{detailListResult.title}</p>
          <div className={style.dtlCon}>
            {
              detailListResult.items.map((item) => {
                return (
                  <div className={style.dtlItm} key={item.detail_level}>
                    <h4 className={style.dtlBrief}>{item.detail_level}、{item.brief}</h4>
                    <p className={style.tdlCon}>{item.content}</p>
                  </div>
                );
              })
            }
          </div>
          <div className={style.detailOpt}>
            <div className={style.heartOpt}>
              <p className={style.heartWrap}>
                <img className={style.heartImg} src="/assets/star.png" alt=""/>
                <span className={style.heartNum}>100</span>
              </p>
              <p className={style.heartWrap}>
                <img className={style.heartImg} src="/assets/unstar.png" alt=""/>
                <span className={style.heartNum}>50</span>
              </p>

            </div>
            <div>
              <img className={style.collectImg} src="/assets/heart.png" alt=""/>
              <img className={style.collectImg} src="/assets/message.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default DetailList;

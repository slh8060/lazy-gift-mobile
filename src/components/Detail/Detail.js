import React from 'react';
import style from './Detail.less';

class Detail extends React.Component {
  render() {
    return (
      <div className={style.mymsgCon}>
        <div className={style.lsitemCon}>
          <div className={style.lstop}>
            <div className={style.lstopLf}>
              <img className={style.psImg} src="/assets/person.png" alt=""/>
              <div className={style.lsDtl}>
                <p className={style.name}>quezhongs</p>
                <p className={style.time}>2小时前</p>
              </div>
            </div>
            <p className={style.label}>
              <img src="/assets/share.png" alt=""/>
            </p>
          </div>
          <div className={style.detailMdl}>
            <p className={style.ttl}>第一次去女朋友家要准备什么？</p>
            <div className={style.dtlCon}>
              <p className={style.dtlItm}>1.打听好对方家里情况；2.买礼物食；3.确认好称呼；4.问清楚有没有特别……</p>
              <p className={style.dtlItm}>1.打听好对方家里情况；2.买礼物食；3.确认好称呼；4.问清楚有没有特别……</p>
              <p className={style.dtlItm}>1.打听好对方家里情况；2.买礼物食；3.确认好称呼；4.问清楚有没有特别……</p>
              <p className={style.dtlItm}>1.打听好对方家里情况；2.买礼物食；3.确认好称呼；4.问清楚有没有特别……</p>

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
          <div className={style.detailBtm}>
            <div className={style.commentItem}>
              <div className={style.commentTop}>
                <div className={style.lstopLf}>
                  <img className={style.psImg} src="/assets/person.png" alt=""/>
                  <div className={style.lsDtl}>
                    <p className={style.replyname}>linpengw</p>
                    <p className={style.time}>2小时前</p>
                  </div>
                </div>
                <p className={style.heartWrap}>
                  <img className={style.heartImg} src="/assets/unstar.png" alt=""/>
                  <span className={style.heartNum}>50</span>
                </p>

              </div>
              <div className={style.commentBtm}>
                <p>你写的是不是你自己的亲身经历啊，哈。</p>
                <p className={style.replyItem}>
                  <span className={style.rpyName}> linpengw</span>
                  <span>回复</span>
                  <span className={style.rpyName}>quezongs:</span>
                  <span className={style.rpyCon}>是的啊</span>
                </p>
                <p className={style.replyItem}>
                  <span className={style.rpyName}> linpengw</span>
                  <span>回复</span>
                  <span className={style.rpyName}>quezongs:</span>
                  <span className={style.rpyCon}>是的啊</span>
                </p>
                <p className={style.replyItem}>
                  <span className={style.rpyName}> linpengw</span>
                  <span>回复</span>
                  <span className={style.rpyName}>quezongs:</span>
                  <span className={style.rpyCon}>是的啊</span>
                </p>

              </div>

            </div>
            <div className={style.commentItem}>
              <div className={style.commentTop}>
                <div className={style.lstopLf}>
                  <img className={style.psImg} src="/assets/person.png" alt=""/>
                  <div className={style.lsDtl}>
                    <p className={style.replyname}>linpengw</p>
                    <p className={style.time}>2小时前</p>
                  </div>
                </div>
                <p className={style.heartWrap}>
                  <img className={style.heartImg} src="/assets/unstar.png" alt=""/>
                  <span className={style.heartNum}>50</span>
                </p>

              </div>
              <div className={style.commentBtm}>
                <p>你写的是不是你自己的亲身经历啊，哈。</p>
                <p className={style.replyItem}>
                  <span className={style.rpyName}> linpengw</span>
                  <span>回复</span>
                  <span className={style.rpyName}>quezongs:</span>
                  <span className={style.rpyCon}>是的啊</span>
                </p>
                <p className={style.replyItem}>
                  <span className={style.rpyName}> linpengw</span>
                  <span>回复</span>
                  <span className={style.rpyName}>quezongs:</span>
                  <span className={style.rpyCon}>是的啊</span>
                </p>
                <p className={style.replyItem}>
                  <span className={style.rpyName}> linpengw</span>
                  <span>回复</span>
                  <span className={style.rpyName}>quezongs:</span>
                  <span className={style.rpyCon}>是的啊</span>
                </p>

              </div>

            </div>

          </div>
        </div>


      </div>
    );
  }
}

export default Detail;

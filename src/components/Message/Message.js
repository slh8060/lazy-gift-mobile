import React from 'react';
import {connect} from 'dva';
import style from './Message.less';

function MyMessage({ messageList }) {
  const messageItem = messageList.messageList.message.map((item) => {
    return (
      <div key={item.id}>
        <div className={style.lsitemCon}>
          <div className={style.lstop}>
            <div className={style.lstopLf}>
              <img className={style.psImg} src="/assets/person.png" alt=""/>
              <div className={style.lsDtl}>
                <p className={style.name}>linpw</p>
                <p className={style.time}>10-23 10:03</p>
                <p className={style.reply}>{item.content}</p>
              </div>
            </div>
            <p className={style.label}>
              <span>回复</span>
            </p>
          </div>
          <div className={style.lsmdl}>
            <div className={style.replyCon}>
              {
                typeof item.lastMessage !== 'undefined' && (
                  <p className={style.lastReply}>
                    @{item.lastMessage.owner_user_name}:{item.lastMessage.content}
                  </p>
                )
              }
              <div className={style.publishDtl}>
                <p className={style.newReply}>@{item.detail.name}</p>
                <p className={style.plhTitle}>{item.detail.title}</p>
                <p className={style.plgBref} >
                  {
                    item.detail.items.map((detailItem) => {
                      return (
                          <span key={detailItem.detail_level}>
                            {detailItem.detail_level}.{detailItem.brief};
                          </span>
                      );
                    })
                  }
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className={style.mymsgCon}>
      {messageItem}
    </div>
  );
}

function mapStateToProps(state) {
  const { messageList } = state.message;
  return {
    messageList,
  };
}
export default connect(mapStateToProps)(MyMessage);

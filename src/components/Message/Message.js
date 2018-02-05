import React from 'react';
import {connect} from 'dva';
import style from './Message.less';

function MyMessage({ messageList }) {
  console.log('aaa', messageList);
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
      {/*<div className={style.lsitemCon}>*/}
        {/*<div className={style.lstop}>*/}
          {/*<div className={style.lstopLf}>*/}
            {/*<img className={style.psImg} src="/assets/person.png" alt=""/>*/}
            {/*<div className={style.lsDtl}>*/}
              {/*<p className={style.name}>linpengwu</p>*/}
              {/*<p className={style.time}>2小时前</p>*/}
              {/*<p className={style.reply}>你写的是不是你自己的亲身经历啊，哈。</p>*/}
            {/*</div>*/}
          {/*</div>*/}
          {/*<p className={style.label}>*/}
            {/*<span>回复</span>*/}
          {/*</p>*/}
        {/*</div>*/}
        {/*<div className={style.lsmdl}>*/}
          {/*<div className={style.replyCon}>*/}
            {/*<div className={style.publishDtl}>*/}
              {/*<p className={style.newReply}> @quezhongs:这写的是不….</p>*/}
              {/*<p className={style.plhTitle}>第一次去女朋友家要准备什么？</p>*/}
              {/*<p className={style.plgBref}>1.打听好对方家里情况；2.买礼物食；3.确认好称呼；4.问清楚有没有特别……</p>*/}
            {/*</div>*/}

          {/*</div>*/}
        {/*</div>*/}
      {/*</div>*/}

      {/*<div className={style.lsitemCon}>*/}
        {/*<div className={style.lstop}>*/}
          {/*<div className={style.lstopLf}>*/}
            {/*<img className={style.psImg} src="/assets/person.png" alt=""/>*/}
            {/*<div className={style.lsDtl}>*/}
              {/*<p className={style.name}>linpengwu</p>*/}
              {/*<p className={style.time}>2小时前</p>*/}
              {/*<p className={style.reply}>你写的是不是你自己的亲身经历啊，哈。</p>*/}
            {/*</div>*/}
          {/*</div>*/}
          {/*<p className={style.label}>*/}
            {/*<span>回复</span>*/}
          {/*</p>*/}
        {/*</div>*/}
        {/*<div className={style.lsmdl}>*/}
          {/*<div className={style.replyCon}>*/}
            {/*<p className={style.lastReply}>linpwengw:这写的是不是….</p>*/}
            {/*<div className={style.publishDtl}>*/}
              {/*<p className={style.newReply}> @quezhongs:这写的是不….</p>*/}
              {/*<p className={style.plhTitle}>第一次去女朋友家要准备什么？</p>*/}
              {/*<p className={style.plgBref}>1.打听好对方家里情况；2.买礼物食；3.确认好称呼；4.问清楚有没有特别……</p>*/}
            {/*</div>*/}

          {/*</div>*/}
        {/*</div>*/}
      {/*</div>*/}

    </div>
  );
}

// const MyMessage = () => ({
//   render() {
//     return (
//       <div className={style.mymsgCon}>
//         <div className={style.lsitemCon}>
//           <div className={style.lstop}>
//             <div className={style.lstopLf}>
//               <img className={style.psImg} src="/assets/person.png" alt=""/>
//               <div className={style.lsDtl}>
//                 <p className={style.name}>linpengwu</p>
//                 <p className={style.time}>2小时前</p>
//                 <p className={style.reply}>你写的是不是你自己的亲身经历啊，哈。</p>
//               </div>
//             </div>
//             <p className={style.label}>
//               <span>回复</span>
//             </p>
//           </div>
//           <div className={style.lsmdl}>
//             <div className={style.replyCon}>
//               <div className={style.publishDtl}>
//                 <p className={style.newReply}> @quezhongs:这写的是不….</p>
//                 <p className={style.plhTitle}>第一次去女朋友家要准备什么？</p>
//                 <p className={style.plgBref}>1.打听好对方家里情况；2.买礼物食；3.确认好称呼；4.问清楚有没有特别……</p>
//               </div>
//
//             </div>
//           </div>
//         </div>
//
//         <div className={style.lsitemCon}>
//           <div className={style.lstop}>
//             <div className={style.lstopLf}>
//               <img className={style.psImg} src="/assets/person.png" alt=""/>
//               <div className={style.lsDtl}>
//                 <p className={style.name}>linpengwu</p>
//                 <p className={style.time}>2小时前</p>
//                 <p className={style.reply}>你写的是不是你自己的亲身经历啊，哈。</p>
//               </div>
//             </div>
//             <p className={style.label}>
//               <span>回复</span>
//             </p>
//           </div>
//           <div className={style.lsmdl}>
//             <div className={style.replyCon}>
//               <p className={style.lastReply}>linpwengw:这写的是不是….</p>
//               <div className={style.publishDtl}>
//                 <p className={style.newReply}> @quezhongs:这写的是不….</p>
//                 <p className={style.plhTitle}>第一次去女朋友家要准备什么？</p>
//                 <p className={style.plgBref}>1.打听好对方家里情况；2.买礼物食；3.确认好称呼；4.问清楚有没有特别……</p>
//               </div>
//
//             </div>
//           </div>
//         </div>
//
//       </div>
//     );
//   },
// });

function mapStateToProps(state) {
  const { messageList } = state.message;
  return {
    messageList,
  };
}
export default connect(mapStateToProps)(MyMessage);

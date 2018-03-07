import React from 'react';
import { connect } from 'dva';
import DetailList from './DetailList';
import CommentList from './CommentList';
import style from './Detail.less';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dispatch: props.dispatch,
      detailList: props.detailList,
      detailId: props.detailId,
      loadCommentList: false,
    };
  }

  componentDidMount() {
    this.setState({
      loadCommentList: true,
    });
    this.state.dispatch({
      type: 'detail/commentList',
      payload: this.state.detailId,
    });
  }

  render() {
    const detailListResult = this.state.detailList;
    const dispatch = this.state.dispatch;
    let commentList = null;
    if (this.state.loadCommentList) {
      commentList = <CommentList />;
    }
    return (
      <div className={style.mymsgCon}>
        <div className={style.lsitemCon}>
          <DetailList detailList={detailListResult} dispatch={dispatch}/>
          {commentList}
        </div>
      </div>
    );
  }
}


function mapStatetoProps(state) {
  const { detailList, detailId } = state.detail;
  return {
    detailList,
    detailId,
  };
}

export default connect(mapStatetoProps)(Detail);

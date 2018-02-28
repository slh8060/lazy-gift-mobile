import { routerRedux } from 'dva/router';
import * as detailService from 'services/detail';

const queryString = require('query-string');

export default {
  namespace: 'detail',
  state: {
    detailList: '',
    commentList: '',
    detailId: '',
  },
  reducers: {
    save(state, {payload: {detailList, detailId}}) {
      return {...state, detailList, detailId};
    },
    saveCommentList(state, {payload: {commentList}}) {
      return {...state, commentList};
    },
  },
  effects: {
    * fetch({payload: detailId}, {call, put}) {
      const {data: detailList} = yield call(detailService.detailList, detailId);
      yield put({type: 'save', payload: {detailList, detailId}});
      yield put(routerRedux.push('/detail'))
    },
    * commentList({payload: detailId}, {call, put}) {
      const {data: commentList} = yield call(detailService.commentList, detailId);
      yield put({type: 'saveCommentList', payload: {commentList}});
    },

  },
  subscriptions: {
    // setup({dispatch, history}) {
    //   return history.listen(({pathname, search}) => {
    //     if (pathname === '/detail') {
    //       dispatch({
    //         type: 'fetch',
    //         payload: queryString.parse(search),
    //       });
    //     }
    //   });
    // },
  },
};

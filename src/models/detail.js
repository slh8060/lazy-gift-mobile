import * as detailService from 'services/detail';

const queryString = require('query-string');

export default {
  namespace: 'detail',
  state: {
    detailResult: '',
    detailId: '',
  },
  reducers: {
    save(state, {payload: {data: detailResult}}) {
      return {...state, detailResult};
    },
  },
  effects: {
    * fetch({payload: detailId }, {call, put, select}) {
      const {data} = yield call(detailService.fetch, detailId);
      yield put({type: 'save', payload: {data}});
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

import * as starService from 'services/star';

const queryString = require('query-string');

export default {
  namespace: 'star',
  state: {
    starList: '',
  },
  reducers: {
    save(state, { payload: starList }) {
      return { ...state, starList };
    },
  },
  effects: {
    * fetch({ payload: { userId = 5 } }, { call, put }) {
      const { data: starList } = yield call(starService.fetch, { userId });
      console.log('result', starList);
      yield put({ type: 'save', payload: { starList } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/star') {
          dispatch({
            type: 'fetch',
            payload: queryString.parse(search),
          });
        }
      });
    },
  },
};

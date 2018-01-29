import * as recommandService from 'services/recommand';

const queryString = require('query-string');

export default {
  namespace: 'recommand',
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: { data: list } }) {
      return { ...state, list };
    },
  },
  effects: {
    *fetch({ payload: { p } }, { call, put }) {
      const { data } = yield call(recommandService.fetch, { p });
      yield put({ type: 'save', payload: { data } });
    },
    *patch({ payload: detailId }, { call, put, select }) {
      yield call(recommandService.remove, detailId);
      const page = yield select(state => state.recommand.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/main') {
          dispatch({ type: 'fetch', payload: queryString.parse(search) });
        }
      });
    },
  },
};

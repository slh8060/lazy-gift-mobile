import * as usersService from 'services/recommand';

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
      const { data } = yield call(usersService.fetch, { p });
      yield put({ type: 'save', payload: { data } });
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

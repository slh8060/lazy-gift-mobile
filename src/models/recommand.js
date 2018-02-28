import * as recommandService from 'services/recommand';

const queryString = require('query-string');

export default {
  namespace: 'recommand',
  state: {
    list: [],
    approveResult: '',
    firstLoad: true,
  },
  reducers: {
    save(state, { payload: { data: list } }) {
      return { ...state, list };
    },
    saveApproveResult(state, { payload: { approveResult } }) {
      return { ...state, approveResult };
    },
  },
  effects: {
    *fetch({ payload: { userId = 5, start = 1 } }, { call, put }) {
      console.log('payload', userId, start);
      const { data } = yield call(recommandService.fetch, { userId, start });
      yield put({ type: 'save', payload: { data } });
    },
    * approve({payload: param}, {call, put}) {
      const { detailId, userId, isApprove } = param;
      const { data: approveResult } = yield call(
        recommandService.approve,
        { detailId, userId, isApprove });
      yield put({type: 'saveApproveResult', payload: {approveResult}});
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

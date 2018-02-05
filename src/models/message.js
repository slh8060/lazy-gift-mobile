import * as messageService from '../services/message';

const queryString = require('query-string');

export default {
  namespace: 'message',
  state: {
    messageList: [],
  },
  reducers: {
    save(state, { payload: messageList }) {
      return { ...state, messageList };
    },
  },
  effects: {
    *fetch({ payload: { userId = 11 } }, { call, put }) {
      const { data: messageList } = yield call(messageService.fetch, { userId });
      yield put({ type: 'save', payload: { messageList } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/message') {
          dispatch({
            type: 'fetch',
            payload: queryString.parse(search),
          });
        }
      });
    },
  },
};

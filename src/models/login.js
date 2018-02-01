import * as loginService from 'services/login';

export default {
  namespace: 'login',
  state: {
    loginResult: '',
  },
  reducers: {
    save(state, { payload: { loginResult } }) {
      return { ...state, loginResult };
    },
  },
  effects: {
    * login({ payload: { username, userpwd } }, { call, put }) {
      const { data: loginResult } = yield call(loginService.login, { username, userpwd });
      yield put({ type: 'save', payload: { loginResult } });
    },
  },
  subscriptions: {},
};

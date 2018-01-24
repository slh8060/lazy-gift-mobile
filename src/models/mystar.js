import { routerRedux } from 'dva/router';
import { mystar } from 'services/mystar';

export default {
  namespace: 'mystar',
  state: [],
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  effects: {
    * mystar({ payload }, { put }) {
      yield put(routerRedux.push('/Star'));
    },
  },
};

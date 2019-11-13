import { getBaidu } from '@/services/api';


const Model = {
  namespace: 'test',
  state: {
    list:[ {
      a: 1,
      b: 2,
      arars: [1,1,1,2,2,2,]
    }]
  },
  effects: {
    *fetchList({ payload, callback }, { put, call }) {
      yield put({
        type: 'savePageData',
        payload,
      });
      // 调用 saveTodoToServer，成功后触发 `add` action 保存到 state
      console.log('payload', payload)
      const response = yield call(getBaidu, payload);
      console.log('respones', response);
      callback && callback(response); // eslint-disable-line
    },
  },
  reducers: {
    savePageData(state, { payload }) {
      // 保存数据到 state
      return {
        ...state,
        payload,
      };
    },
  },
};

export default Model;

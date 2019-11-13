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
    *fetchData({ payload, callback }, { put, call }) {
      yield put({
        type: 'saveData',
        payload,
      });
      console.log('payload', payload)
      const response = yield call(getBaidu, payload);
      console.log('respones', response);
      if (response) {
        return Promise.resolve(response);
      }
      return Promise.reject(response);
    },
  },
  reducers: {
    // 保存数据到 state
    saveData(state, { payload }) {
      return {
        ...state,
        payload,
      };
    },
  },
};

export default Model;

import {Effect, Model} from 'dva-core-ts';
import {MyReducer} from './type';

export interface IHomeState {
  num: number;
}
interface IHomeModel extends Model {
  namespace: 'home';
  state: IHomeState;
  reducers: {
    add: MyReducer<IHomeState>;
  };
  effects: {
    asyncAdd: Effect;
  };
}

function delayFun(delay: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
const homeState: IHomeState = {
  num: 0,
};
const homeModel: IHomeModel = {
  namespace: 'home',
  state: homeState,
  reducers: {
    add(state, {payload}) {
      state.num += payload;
    },
  },
  effects: {
    *asyncAdd({payload}, {call, put}) {
      yield call(delayFun, 1000);
      yield put({type: 'add', payload});
    },
  },
};

export default homeModel;

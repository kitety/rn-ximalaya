import {create} from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '../models';

// 1.创建实例
const app = create();
// 2.加载model
models.forEach(model => app.model(model));

// immer
app.use(require('dva-immer').default());
// loading
app.use(createLoading());

// 3.启动dva
app.start();
// 4.导出dva
export default app._store;

// 仓库配置文件
import { createPinia } from 'pinia';

const store = createPinia();
export default store;
export * from './modules/counter';

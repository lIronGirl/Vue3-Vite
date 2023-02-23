import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

createApp(App).use(store).use(router).mount('#app');

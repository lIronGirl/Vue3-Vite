import axios from 'axios';
import { MessagePlugin } from 'tdesign-vue-next';

// 创建请求实例
const instance = axios.create({
  baseURL: '/api',
  // 指定请求超时的毫秒数
  timeout: 1000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
});

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (config) => {
    /*
            在这里一般会携带前台的参数发送给后台，比如：
            const token = getToken();
            if(token) {
                config.headers.token = token;
            }
        */
    return config;
  },
  (error) => Promise.reject(error),
);

// 后置拦截器（获取到响应时的拦截
instance.interceptors.response.use(
  (response) => {
    /*
            根据项目实际情况来对 response 和 error 做处理
            这里对response和error不做任何处理，直接返回
        */
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.data) {
      return Promise.reject(error);
    }
    const { message } = error;
    MessagePlugin.error({ content: message });
    return Promise.reject(error);
  },
);

// 导出常用函数
export const post = (url, data = {}, params = {}) => {
  return instance({
    method: 'post',
    url,
    data,
    params,
  });
};

export const get = (url, params = {}) => {
  return instance({
    method: 'get',
    url,
    params,
  });
};

export const put = (url, data = {}, params = {}) => {
  return instance({
    method: 'put',
    url,
    params,
    data,
  });
};

export const myDelete = (url, params = {}) => {
  return instance({
    method: 'delete',
    url,
    params,
  });
};

export default instance;

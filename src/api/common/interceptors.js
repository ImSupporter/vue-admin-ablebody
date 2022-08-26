import store from '@/store/index';
import { router } from '@/router'

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent

      // console.log(config);
      config.withCredentials = true;
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
 
  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function() {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      store.dispatch('authFail')
      router.push('/login')
    },
  );

  return instance;
}
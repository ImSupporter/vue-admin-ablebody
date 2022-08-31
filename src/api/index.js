import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 엑시오스 초기화
function createInstance() {
  const instance = axios.create({
    baseURL: 'https://thome.ablebody.im:50913',
    credentials: true,
  });
  console.log('엑시오스 초기화');
  return setInterceptors(instance);
}

export const apiInstance = createInstance();


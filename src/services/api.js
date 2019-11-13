import request from '@/utils/request';

const baseUrl = (process.env && process.env.baseUrl) || '';

export { baseUrl, request };

export function getBaidu(params = {}) {
  console.log('params', params, baseUrl, 'hhh', process.env);
  return request.get('http://www.baidu.com', {
    params,
  })
}

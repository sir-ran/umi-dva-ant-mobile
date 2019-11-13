
const baseUrl = (process.env && process.env.baseUrl) || '';

export { baseUrl };

export function getBaidu(params = {}) {
  console.log('params', params, baseUrl, 'hhh', process.env);
  return fetch('http://www.baidu.com', {
    data: params,
  })
}

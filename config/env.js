
const defaultConfig = {
  baseUrl: 'http://localhost',
};

/**
 * 环境变量
 * 可通过process.env[key]访问
 * 如：访问baseUrl 是process.env.baseUrl
 */
const config = {
  dev: defaultConfig,
  test: {
    baseUrl: 'http://test.com',
  },

  prod: {
    baseUrl: 'www.prod.com',
  },
};

export default config;

import routesConfig from './route.config';
import envConfig from './env';

const { API_ENV } = process.env;

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      dynamicImport: {
        webpackChunkName: true,
      },
      title: 'umi-dva-ant-mobile-demo',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    },
  ],
];

export default {
  base: '/',
  publicPath: './',
  history: 'hash',
  hash: true,
  treeShaking: true,
  routes: routesConfig,
  targets: {
    ie: 11,
  },
  define: {
    'process.env': {
      ...envConfig[API_ENV],
    }
  },
  plugins,
  /*
  proxy: {
    '/server/api/': {
      target: 'https://preview.pro.ant.design/',
      changeOrigin: true,
      pathRewrite: { '^/server': '' },
    },
  },
  */
};

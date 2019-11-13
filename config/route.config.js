// umi routes: https://umijs.org/zh/guide/router.html
export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        component: '../pages/index',
      },
      {
        path: '/products',
        component: '../pages/products',
      },
    ],
  },
];

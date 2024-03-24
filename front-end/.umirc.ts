import { defineConfig } from '@umijs/max';
console.log('NODE_ENV', process.env.NODE_ENV);
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  clickToComponent: {},
  request: {},
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  history: { type: 'memory' },
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',  
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});


import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Login from '../views/Login.vue';
import User from '../views/user/User.vue';
import UserProducts from '../views/user/UserProducts.vue';
import UserEdit from '../views/user/UserEdit.vue';
import UserShopping from '../views/user/UserShopping.vue';
import UserSales from '../views/user/UserSales.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '',
        name: 'User',
        component: UserProducts,
      },
      {
        path: 'shopping',
        name: 'Shopping',
        component: UserShopping,
      },
      {
        path: 'sales',
        name: 'Sales',
        component: UserSales,
      },
      {
        path: 'edit',
        name: 'User-Edit',
        component: UserEdit,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

export default router;

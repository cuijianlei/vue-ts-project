import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import Cookies from 'js-cookie';

Vue.use(Router);

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  const token = Cookies.get('token');
  console.log(token);
  if (token) {
    if (to.path === '/login') {
      next(from);
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});

export default router;

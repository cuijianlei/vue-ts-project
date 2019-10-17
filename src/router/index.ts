import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import Cookies from 'js-cookie';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  routes,
});

const turn = (to, from, next) => {
  if (to.path === '/login') {
    next(from);
  } else {
    next();
  }
};

router.beforeEach((to, from, next) => {
  const token = Cookies.get('token');
  console.log(token);
  if (token) {
    if (!store.state.user_name) {
      store.dispatch('getInfoActions').then(() => {
        turn(to, from, next);
      });
    } else {
      turn(to, from, next);
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

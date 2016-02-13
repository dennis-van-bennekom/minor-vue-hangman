import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Create from './components/Create';
import Play from './components/Play';

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
  '/': {
    component: Create
  },

  '/:word': {
    component: Play
  }
});

router.start(App, 'app');

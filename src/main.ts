import 'semantic-ui-css/semantic.css';

import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import './main.css';

import App from './App.vue';
import Home from './components/Home.vue';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes: RouteConfig[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/books', component: BookList },
  { path: '/books/:isbn', component: BookDetails, props: true },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');

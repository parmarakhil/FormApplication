import Vue from "vue";
import VueRouter from "vue-router";
import PageForm1 from '../components/PageForm1.vue';
import PageForm2 from '../components/PageForm2.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'page1',
    component: PageForm1,
  },
  {
    path: '/page2',
    name: 'page2',
    component: PageForm2,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

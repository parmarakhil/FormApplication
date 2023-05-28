import PageForm1 from '../components/PageForm1.vue';
import PageForm2 from '../components/PageForm2.vue';
import { createWebHistory, createRouter } from "vue-router";


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

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



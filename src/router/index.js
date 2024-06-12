import { createRouter as _createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EarnedRunAverageVue from '../components/EarnedRunAverage.vue';


const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/EarnedRunAverage',
    component: EarnedRunAverageVue

  }, 
  
];

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}

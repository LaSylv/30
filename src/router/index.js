import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import FoodView from "../views/FoodView.vue";
import MoneyView from "@/views/MoneyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/activities',
      name: 'activities',
      component: ActivitiesView
    },
    {
      path: '/food',
      name: 'food',
      component: FoodView
    },
    {
      path: '/money',
      name: 'money',
      component: MoneyView
    }
  ]
})

export default router

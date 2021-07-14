import { createRouter } from "vue-router";

import { createWebHashHistory } from 'vue-router'
import { routes } from './routes'


export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
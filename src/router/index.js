import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

const routes = [
  {
    path: "/vocab",
    name: "Main",
    component: Main,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/vocab",
  },
  {
    path: "/",
    redirect: "/vocab",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

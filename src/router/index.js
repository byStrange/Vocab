import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Add from "../views/Add.vue";
const routes = [
  {
    path: "/",
    redirect: "/vocab",
  },
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
    path: "/add",
    name: "Add",
    component: Add,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

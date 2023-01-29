import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Add from "../views/Add.vue";
import Topic from "../components/Add/Topic.vue";

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
  // after /add it can be a subpath, like /add/{topicId}
  {
    path: "/add/:topicId",
    name: "Topic",
    component: Topic,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

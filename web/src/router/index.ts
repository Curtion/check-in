import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/Layout/index.vue"),
    redirect: "/overview",
    children: [
      {
        path: "overview",
        name: "overview",
        component: () => import("@/views/overview/index.vue"),
      },
      {
        path: "taskAdd",
        name: "taskAdd",
        component: () => import("@/views/task/add/index.vue"),
      },
      {
        path: "taskList",
        name: "taskList",
        component: () => import("@/views/task/list/index.vue"),
      },
      {
        path: "taskLog",
        name: "taskLog",
        component: () => import("@/views/task/log/index.vue"),
      },
      {
        path: "store",
        name: "store",
        component: () => import("@/views/store/index.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/about/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

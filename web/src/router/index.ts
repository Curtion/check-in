import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/Layout/index.vue"),
    redirect: "/overview",
    children: [
      {
        path: "overview",
        component: () => import("@/views/overview/index.vue"),
      },
      {
        path: "taskAdd",
        component: () => import("@/views/overview/index.vue"),
      },
      {
        path: "taskList",
        component: () => import("@/views/overview/index.vue"),
      },
      {
        path: "taskLog",
        component: () => import("@/views/overview/index.vue"),
      },
      {
        path: "about",
        component: () => import("@/views/overview/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

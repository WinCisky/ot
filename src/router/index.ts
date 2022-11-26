import type path from "path";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop/:shop",
      name: "shop",
      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/review/:shop/:uuid",
      name: "review",
      component: () => import("../views/ReviewView.vue"),
    },
    {
      path: "/review",
      name: "review_old",
      component: () => import("../views/ReviewView.vue"),
    },
    {
      path: "/thanks",
      name: "thanks",
      component: () => import("../views/ThankYouView.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/PrivacyView.vue"),
    },
  ],
});

export default router;

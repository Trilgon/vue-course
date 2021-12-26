import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "main",
      auth: true
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/emp",
    name: "Emp",
    component: () => import("../views/Emp.vue"),
    meta: {
      layout: "emp",
      auth: true
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next)=>{
  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['auth/isAuth']) {
    next()
  } else if (requireAuth && !store.getters['auth/isAuth']) {
    next('/auth?message=auth')    
  } else{
    next()
  }
})

export default router;

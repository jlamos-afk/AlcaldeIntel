import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import DashboardView from '../views/DashboardView.vue';
import { useAuthStore } from '../store';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  const hasToken = store.token;
  if (!hasToken && to.name !== 'login' && to.name !== 'register') {
    next({ name: 'login' });
  } else if (hasToken && (to.name === 'login' || to.name === 'register')) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
});

export default router;

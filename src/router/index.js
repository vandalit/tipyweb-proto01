import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import AdminDashboardView from "../views/AdminDashboardView.vue";
import DeveloperDashboardView from "../views/DeveloperDashboardView.vue";
import EvaluatorDashboardView from "../views/EvaluatorDashboardView.vue";

const routes = [
  { path: "/", name: "Login", component: LoginView },
  { path: "/admin-dashboard", name: "AdminDashboard", component: AdminDashboardView },
  { path: "/developer-dashboard", name: "DeveloperDashboard", component: DeveloperDashboardView },
  { path: "/evaluator-dashboard", name: "EvaluatorDashboard", component: EvaluatorDashboardView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

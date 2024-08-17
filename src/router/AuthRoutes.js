export default [
  {
    path: "/login",
    component: () => import("@/layouts/blank/BlankLayout.vue"),
    children: [
      {
        name: "login",
        path: "",
        component: () => import("@/views/auth/Login.vue"),
      },
    ],
  },
  {
    path: "/register",
    component: () => import("@/layouts/blank/BlankLayout.vue"),
    children: [
      {
        name: "cadastro",
        path: "",
        component: () => import("@/views/auth/Register.vue"),
      },
    ],
  },
];

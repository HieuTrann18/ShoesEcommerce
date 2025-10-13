import { lazy } from "react";

const routers = [
  {
    path: "/",
    component: lazy(() => import("../pages/HomePage/HomePage")),
  },
  {
    path: "/blog",
    component: lazy(() => import("../pages/Blog/Blog")),
  },
];

export default routers;

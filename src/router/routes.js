import Index from "@/pages/main/main";
import Admin from "@/pages/admin/admin";
export default [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/admin",
    component: Admin,
  },
  // {
  //   path: "/movie",
  //   component: Movie,
  //   children: [
  //     {
  //       path: "/movie/hot",
  //       component: Hot,
  //     },
  //     {
  //       path: "/movie/news",
  //       component: News,
  //     },
  //     {
  //       path: "/movie",
  //       redirect: "/movie/hot"
  //     }
  //   ]
  // },
  // {
  //   path: "/detail/:id",
  //   component: Detail,
  // },
];

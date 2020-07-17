import Main from "@/pages/main/main";

import Admin from "@/pages/admin/admin";
import Student from "@/pages/admin/student";
import User from "@/pages/admin/music";
import ArticleAdd from "@/pages/article/article-add";
import Article from "@/pages/article/article";
import ArticleWx from "@/pages/article/article-wx";
import Echarts from "@/pages/echarts/echarts";
import NotFound from "@/pages/notfound/notfound";
export default [
  {
    path: "/",
    name: "网站管理",
    component: Main,
  },
  {
    path: "/admin",
    name: "管理中心",
    children: [
      {
        path: "",
        name: "工作室人员管理",
        component: Admin,
      },
      {
        path: "/stu",
        name: "学生管理",
        component: Student,
      },
      {
        path: "/music",
        name: "用户管理",
        component: User,
      },
    ],
  },
  {
    path: "/article",
    name: "文章管理",
    children: [
      {
        path: "/add",
        name: "新增文章",
        component: ArticleAdd,
      },
      {
        path: "",
        name: "文章管理",
        component: Article,
      },
      {
        path: "/wechat",
        name: "微信文章",
        component: ArticleWx,
      },
    ],
  },
  {
    path: "/echarts",
    name: "数据中心",
    component: Echarts,
  },
  // {
  //   path: "/detail/:id",
  //   component: Detail,
  // },
  {
    path: "/notfound",
    component: NotFound,
    name: "404",
  },
];

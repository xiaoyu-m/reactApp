import axios from "axios";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import qs from "qs";
import { message, Spin } from "antd";
const Axios = axios.create({
  baseURL: "http://127.0.0.1:83", // 设置请求的base url
  // baseURL: "https://api.itooi.cn", // 设置请求的base url
  // timeout: 20000, // 设置超时时长
});

// 设置post请求头
Axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 当前正在请求的数量
let requestCount = 0;

// 显示loading
function showLoading() {
  if (requestCount === 0) {
    var dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    ReactDOM.render(<Spin tip="加载中..." size="large" />, dom);
  }
  requestCount++;
}

// 隐藏loading
function hideLoading() {
  requestCount--;
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById("loading"));
  }
}

// 请求前拦截
Axios.interceptors.request.use(
  (config) => {
    // requestCount为0，才创建loading, 避免重复创建
    if (config.headers.isLoading !== false) {
      showLoading();
    }

    if (config.method === "post") {
      // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (err) => {
    // 判断当前请求是否设置了不显示Loading
    if (err.config.headers.isLoading !== false) {
      hideLoading();
    }
    return Promise.reject(err);
  }
);

// 返回后拦截
Axios.interceptors.response.use(
  (res) => {
    // 判断当前请求是否设置了不显示Loading
    if (res.config.headers.isLoading !== false) {
      hideLoading();
    }
    return res.data;
  },
  (err) => {
    console.log(err);
    if (err.config.headers.isLoading !== false) {
      hideLoading();
    }
    if (err.message === "Network Error") {
      message.warning("网络连接异常！");
    }
    if (err.code === "ECONNABORTED") {
      message.warning("请求超时，请重试");
    }
    return Promise.reject(err);
  }
);
// 把组件引入，并定义成原型属性方便使用
React.$axios = Axios;
export default {
  msg: "$axios 注入成功",
};

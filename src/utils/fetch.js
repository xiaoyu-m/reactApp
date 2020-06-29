// 设置请求的base url
import React from "react";
import qs from "qs";
const baseUrl = "http://127.0.0.1:83";
// 封装get请求

// 格式化data
function paramsPostBody(obj) {
  var result = ""; //接受最后结果
  var item;
  for (item in obj) {
    result += "&" + item + "=" + encodeURIComponent(obj[item]);
  }
  if (result) {
    result = result.slice(1); //去掉第一个&
  }
  return result;
}
let Fetch = {
  get: function (url) {
    url = baseUrl + url;
    var result = fetch(url).then((res) => res.json());
    return result;
  },
  // 封装post请求
  post: function (url, data) {
    url = baseUrl + url;
    var result = fetch(url, {
      method: "post",
      headers: {
        Accept:
          "application/json,text/plain,*/*" /* 格式限制：json、文本、其他格式 */,
        "Content-Type": "application/x-www-form-urlencoded" /* 请求内容类型 */,
      },
      // data表单数据，body最终要的格式为username=tony&pwd=123456，所以需要格式化
      body: qs.stringify(data),
    }).then((res) => res.json());
    return result;
  },
};

React.$fetch = Fetch;
export default {
  msg: "$fetch注入成功",
};

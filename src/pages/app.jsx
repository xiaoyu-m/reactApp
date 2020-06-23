import React from "react";
import axios from "axios";
import PropsType from "props-type";

import "../assets/less/index.less";
import SignUp from "@/pages/sign-up/sign-up";
import Header from "@/components/layout/header/header";
import Sider from "@/components/layout/sider/sider";
import Footer from "@/components/layout/footer/footer";
import CommentAdd from "@/components/comment-add/comment-add";
import CommentList from "@/components/comment-list/comment-list";

class Admin extends React.Component {
  // 给组件类添加属性
  // static propTypes = {
  // addComment: PropsType.func.isRequired,
  // };
  state = {
    navState: true,
    date: new Date(),
    isAdmin: true,
    comments: [{ username: "小于", content: "你好美哦" }],
  };
  // 显示隐藏 nav

  changeNavState = (navState) => {
    // console.log(navState);
    this.setState({ navState });
  };

  // 添加评论
  addComment = (comment) => {
    // console.log(comment);
    let { comments } = this.state;
    comments = [comment, ...comments];
    this.setState({ comments });
  };
  getCommentData = () => {
    axios
      .get("http://127.0.0.1:83/user/test")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 删除元素
  delComment = (id) => {
    let { comments } = this.state;
    comments.splice(id, 1);
    this.setState({ comments });
  };
  render() {
    const { navState, isAdmin } = this.state;
    return (
      <div className={navState ? "showNav main" : "hideNav main"}>
        <Sider />
        <section>
          <Header changeNavState={this.changeNavState} />
          <main>
            {isAdmin && <h1>我是管理员</h1>}
            {/*<CommentAdd addComment={this.addComment} />*/}
            {/*<CommentList*/}
            {/*  comments={this.state.comments}*/}
            {/*  delComment={this.delComment}*/}
            {/*/>*/}
          </main>
          <Footer />
        </section>
      </div>
    );
  }
}
export default Admin;

import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "@/components/comment-item/comment-item";
class CommentList extends Component {
  state = {}; // 初始化数据
  static propTypes = {
    comments: PropTypes.array,
    delComment: PropTypes.func,
  };
  DelItem = (id) => {
    this.props.delComment(id);
  };
  render() {
    const { comments } = this.props;
    return (
      <div className="comment-list">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: "none" }}>暂无评论，点击左侧添加评论</h2>
        {comments.map((e, index) => {
          e.id = index;
          return <CommentItem key={index} comment={e} DelItem={this.DelItem} />;
        })}
      </div>
    );
  }
}

export default CommentList;

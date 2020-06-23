import React, { Component } from "react";
import PropTypes from "prop-types";
import "./comment-item.less";

class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object,
    DelItem: PropTypes.func,
  };
  DelItem = () => {
    this.props.DelItem(this.props.comment.id);
  };
  render() {
    const { comment } = this.props;
    return (
      <div className="comment-item">
        <h2>
          {comment.username}
          <button className="del-item" onClick={this.DelItem}>
            删除
          </button>
        </h2>
        <h3>{comment.content}</h3>
      </div>
    );
  }
}

export default CommentItem;

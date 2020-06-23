import React, { Component } from "react";
import "./comment-add.less";
import { Button } from "antd";
import PropsType from "props-type";
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};
class CommentAdd extends Component {
  static propTypes = {
    // addComment: PropsType.func,
  };
  state = {
    username: "",
    content: "",
  };
  // formRef = React.createRef<FormInstance>();
  onFinish = (values) => {
    console.log(values);
  };
  bindSubmit = () => {
    let isV = true;
    let data = this.state;
    // 收集数据 并封装comment对象
    for (const type in data) {
      if (!data[type]) {
        isV = false;
      }
    }
    if (isV) {
      this.setState({ username: "", content: "" });
      this.props.addComment(data);
    } else {
      alert("表单数据不能为空,请重新输入");
    }
  };
  handCaptionChange = (even) => {
    const username = even.target.value;
    this.setState({ username });
  };
  handContentChange = (even) => {
    const content = even.target.value;
    this.setState({ content });
  };
  render() {
    return (
      <div className="comment-add">
        <h1>添加留言内容：</h1>
        <div>
          <div>
            <input
              type="text"
              onChange={this.handCaptionChange}
              value={this.state.username}
            />
          </div>
          <div>
            <textarea
              cols="30"
              value={this.state.content}
              rows="10"
              onChange={this.handContentChange}
            />
          </div>
          <div>
            <Button onClick={this.bindSubmit}>提交</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentAdd;

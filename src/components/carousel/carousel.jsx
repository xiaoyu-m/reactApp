import React, { $axios, Component, Fragment } from "react";
import "./carousel.less";

import Antd from "antd";
class Carousel extends Component {
  state = {
    list: [],
  };
  componentWillMount() {
    $axios.get("tencent/banner").then((res) => {
      this.setState({ list: res.data });
    });
  }
  render() {
    let { list } = this.state;
    return (
      <Antd.Carousel autoplay>
        {list.map((e, i) => (
          <Fragment key={e.id}>
            <div>
              <img
                src={e.pic_info.url}
                alt={e.id}
                style={{ width: "100%", overflow: "hidden" }}
              />
            </div>
          </Fragment>
        ))}
      </Antd.Carousel>
    );
  }
}

export default Carousel;

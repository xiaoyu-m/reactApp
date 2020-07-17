import React, { $fetch, Component } from "react";
import "./fetch.less";
import qs from "qs";
class Fetch extends Component {
  componentDidMount() {
    $fetch
      .post("/api/test", {
        username: 1,
      })
      .then((data) => {
        console.log(data);
      });
    // $fetch
    //   .get("/music/test", { a: 1 })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }

  render() {
    return (
      <div>
        <h1>Fetch</h1>
      </div>
    );
  }
}

export default Fetch;

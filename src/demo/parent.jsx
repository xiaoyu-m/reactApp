import React, { Component } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
class Parent extends Component {
  render() {
    return (
      <div>
        <h1>Parent</h1>
        <div>
          Child2: <Child1 />
        </div>
        <div>
          Child2: <Child2 />
        </div>
      </div>
    );
  }
}

export default Parent;

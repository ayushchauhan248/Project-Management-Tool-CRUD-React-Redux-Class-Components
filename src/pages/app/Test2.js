import React, { Component } from "react";

class Test2 extends Component {
  componentDidMount() {
    console.log("Component did mount !!!");
  }

  render() {
    console.log("Render !!!");
    return (
      <div>
        <div style={{ color: this.props.color }}>color change</div>
      </div>
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("will rcv props", nextProps);
  }

  UNSAFE_componentWillUpdate() {
    console.log("Component will updated");
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.color !== this.props.color) {
      console.log("should comp update");
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log("Component did update !!!");
  }

  componentWillUnmount() {
    console.log("Component will umount");
  }
}
export default Test2;

import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    console.log("Constructor !!!");
    super(props);
    this.state = {
      counter: 0,
    };
    this.inc = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    this.dec = () => {
      this.setState({ counter: this.state.counter - 1 });
    };
  }

  componentDidMount() {
    console.log("Component did mount !!!");
  }

  render() {
    console.log("Render !!!");
    return (
      <div>
        counter : {this.state.counter}
        <br></br>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("Component did update !!!");
  }

  componentWillUnmount() {
    console.log("Component will umount");
  }
}
export default Test;

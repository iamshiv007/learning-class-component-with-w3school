import React from "react";
import "./style.css";

class Car extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { color: "gray" };
  // }
  render() {
    return (
      <>
        <h1>My first class component</h1>
        <h1>This is my {this.props.color} car.</h1>
        <Engine />
      </>
    );
  }
}
export default Car;

class Engine extends React.Component {
  render() {
    return <h1>Hello i am a Engine</h1>;
  }
}

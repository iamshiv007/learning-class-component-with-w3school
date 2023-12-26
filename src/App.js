import React from "react";
import "./style.css";

class Car extends React.Component {
  constructor(){
    super();
    this.state={color:"gray"}
  }
  render() {
    return (
      <>
      <h1>My first class component</h1>
        <h1>This is my {this.state.color} car.</h1>
      </>
    );
  }
}
export default Car;


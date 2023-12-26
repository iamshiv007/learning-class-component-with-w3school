import React from "react";
import "./style.css";

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1994,
    };
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <>
        <h1>My {this.state.brand}</h1>
        <h3>
          Its is a {this.state.color} {this.state.model} from {this.state.year}
        </h3>
        <button onClick={this.changeColor}>Change Color</button>
      </>
    );
  }
}
export default Car;

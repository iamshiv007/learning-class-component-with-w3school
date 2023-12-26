import React from 'react';
import './style.css';

// create a class component names Car
// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

class Car extends React.Component {
  constructor(props) {
    super();
    // this.state = { color: 'red' };
  }
  render() {
    return <h1>This is my {this.props.color} car</h1>;
  }
}

export default Car;

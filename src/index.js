import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>List Of Names</h1>
//     <ul>
//       <li>Haleemah</li>
//       <li>Rasheed</li>
//       <li>Sunkanmi</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// )
const num = Math.floor(Math.random() * 10);
const firstName = "Anthony";
const lastName = "Maduneme";

ReactDOM.render(
  <div>
    <h1>Hello, {firstName + " " + lastName}</h1>
    <p>Your lucky number is {num * 10}</p>
  </div>,
  document.getElementById("root")
);

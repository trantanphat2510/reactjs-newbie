import logo from "./logo.svg";
import "./App.css";
import MyComponents from "./components/MyComponents";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        Xin chào
        <MyComponents></MyComponents>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       Xin chào
//       <MyComponents></MyComponents>
//     </div>
//   );
// }

export default App;

import React from "react";

class MyComponents extends React.Component {
  //JSX

  state = {
    name: "Trần Tấn Phát",
    age: 21,
    addresss: "Thủ Đức",
  };

  render() {
    return (
      <div>
        {this.state.name} <p></p>
        {this.state.age} <p></p>
        {this.state.addresss}
      </div>
    );
  }
}

export default MyComponents;

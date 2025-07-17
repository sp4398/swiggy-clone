import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="border border-black w-[500px] ml-7 mt-2">
        <div className="ml-3">
          <h2>Managed By: {this.props.name}</h2>
          <h3>Location: {this.props.location}</h3>
          <h4>Contact: sp4398@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;

import React, { Component } from "react";
class List extends Component {
  render() {
    const { professions, friends } = this.props;
    return (
      <div className="gnome__lists">
        <ul>
          Professions:
          {professions.map((profession, index) => {
            return <li key={index}>{profession}</li>;
          })}
        </ul>
        <ul>
          Friends:
          {friends.map((friend, index) => {
            return <li key={index}>{friend}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;

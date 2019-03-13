import React, { Component } from "react";

class List extends Component {
  render() {
    const { professions, friends } = this.props;

    return (
      <div className="gnome__lists">
        
        <ul>
          {professions.map((profession, index) => {
            return <li key={index}>{profession}</li>;
          })}
        </ul>

        <ul>
          {friends.map((friend, index) => {
            return <li key={index}>{friend}</li>;
          })}
        </ul>

      </div>
    );
  }
}

export default List;

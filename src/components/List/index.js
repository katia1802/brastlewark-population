import React, { Component } from "react";
import "./List.scss";

class List extends Component {
  render() {
    const { professions, friends } = this.props;

    return (
      <div className="gnome__lists">
        <div>
        <h3 className="gnome__list-professionstitle">Professions</h3>
        <ul className="gnome__list-professions">
          {professions.map((profession, index) => {
            return <li key={index}>{profession}</li>;
          })}
        </ul>
        </div>
        <div>
        <h3 className="gnome__list-friendstitle">Friends</h3>
        <ul className="gnome__list-friends">
          {friends.map((friend, index) => {
            return <li key={index}>{friend}</li>;
          })}
        </ul>
        </div>
      </div>
    );
  }
}

export default List;

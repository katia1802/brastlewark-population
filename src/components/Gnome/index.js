import React, { Component } from "react";
import List from "../List";

class Gnome extends Component {
  render() {
    const {
      name,
      image,
      professions,
      friends,
      age,
      height,
      hair_color
    } = this.props;
    return (
      <div>
        <h2 className="gnome__name">{name}</h2>
        <img className="gnome__image" src={image} alt={name} />

        <List professions={professions} />
        <List friends={friends} />

        <div className="gnome__details">
          <p>{age}</p>
          <p>{height}</p>
          <p>{hair_color}</p>
        </div>
      </div>
    );
  }
}

export default Gnome;

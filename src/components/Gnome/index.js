import React, { Component } from "react";
import List from "../List";
import round from 'lodash.round';


class Gnome extends Component {
  render() {
    const {
      name,
      image,
      professions,
      friends,
      age,
      height,
      weight,
      hair_color
    } = this.props;

    const roundedHeight = round(height)

    const roundedWeight = round(weight)

    return (
      <div>
        <h2 className="gnome__name">{name}</h2>
        <img className="gnome__image" src={image} alt={name} />

        <List 
        professions={professions}
        friends={friends} />

        <div className="gnome__details">
          <p>{age}</p>
          <p>Height {roundedHeight}</p>
          <p>Weight {roundedWeight}</p>
          <p>{hair_color}</p>
        </div>
      </div>
    );
  }
}

export default Gnome;

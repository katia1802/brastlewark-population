import React, { Component } from "react";
import List from "../List";
import round from 'lodash.round';
import './Gnome.scss'

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
      <div className="gnome__card">
        <h2 className="gnome__name">{name}</h2>
        <img className="gnome__image" src={image} alt={name} />

        <div className="gnome__details">
          <p>{age}</p>
          <p>{roundedHeight}</p>
          <p>{roundedWeight}</p>
          <p>{hair_color}</p>
        </div>
        
        <List 
        professions={professions}
        friends={friends} />


      </div>
    );
  }
}

export default Gnome;

import React, { Component } from "react";

class GnomeCard extends Component {
  render() {
    const { gnomesRawData } = this.props;

    const gnomeId = this.props.match.params.id;

    if (gnomesRawData.length === 0 || gnomeId >= gnomesRawData.length) {
      return <div> No black data</div>;
    } else {
      const selectedGnome = gnomesRawData[gnomeId];
      const fullname = selectedGnome.name;
      const image = selectedGnome.thumbnail;
      const professions = selectedGnome.professions;
      const friends = selectedGnome.friends;
      const age = selectedGnome.age;
      const height = selectedGnome.height;
      const weight = selectedGnome.weight;

      return (<div> 
        <img src={image} alt= {fullname}/>
        <h2>{fullname}</h2>
        <div>{age}</div>
        <div>{professions}</div>
        <div>{friends}</div>
        <div>{height}</div>
        <div>{weight}</div>

      </div>)
    }
  }
}

export default GnomeCard;

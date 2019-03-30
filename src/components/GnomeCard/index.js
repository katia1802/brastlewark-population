import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import GoBack from "../GoBack";
import "../GnomeCard/GnomeCard.scss";
import List from "../List";

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
      const haircolor = selectedGnome.haircolor;

      return (
        <Fragment>
          <div className="selectedGnome__card">
            <h2 className="selectedGnome__name">{fullname}</h2>
            <div className="selectedGnome_info">
              <img
                className="selectedGnome__image"
                src={image}
                alt={fullname}
              />
              <div className="selectedGnome_details">
                <div className="selectedGnome_age">Age: {age}</div>
                {/* <div className="selectedGnome_professions">{professions}</div>
          <div className="selectedGnome_friends">{friends}</div> */}

                <div className="selectedGnome_height">Height: {height}</div>
                <div className="selectedGnoome_weight">Weight: {weight}</div>
                <div className="selectedGnome_hair_color">
                  Hair Color: {haircolor}
                </div>
              </div>
              <List professions={professions} friends={friends} />
              <GoBack />

            </div>

          </div>
        </Fragment>
      );
    }
  }
}

GnomeCard.propTypes = {
  match: PropTypes.object.isRequired
};

export default GnomeCard;

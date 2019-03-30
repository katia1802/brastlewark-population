import React, { Component } from "react";
import List from "../List";
import round from "lodash.round";
import "./Gnome.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRuler, faWeight, faHeartbeat, faPalette} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';


library.add(faRuler, faWeight, faHeartbeat, faPalette);


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

    const roundedHeight = round(height);

    const roundedWeight = round(weight);

    return (
      <div className="gnome__card">
        <div className="gnome__image-wrapper">
          <img className="gnome__image" src={image} alt={name} />
        </div>
        <div className="gnome__text">
          <h2 className="gnome__name">{name}</h2>

          <div className="gnome__details">
            <p><FontAwesomeIcon icon="heartbeat" /> {age}</p>
            <p><FontAwesomeIcon icon="ruler" /> {roundedHeight}cm</p>
            <p><FontAwesomeIcon icon="weight" /> {roundedWeight}kg</p>
            <p><FontAwesomeIcon icon="palette" /> {hair_color}</p>
          </div>

          <List professions={professions} friends={friends} />
        </div>
      </div>
    );
  }
}
Gnome.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  professions: PropTypes.array.isRequired,
  friends: PropTypes.array.isRequired,
  age: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  hair_color: PropTypes.string.isRequired,
}


export default Gnome;

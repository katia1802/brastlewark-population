import React, { Component } from "react";
import "./GnomesList.scss";

class GnomesList extends Component {
  render() {
    const { gnomesRawData } = this.props;

    return (
      <ul className="gnome__list">
        {gnomesRawData.map((item, index) => {
          return (
            <li className="gnome glowButton" key={index}>
              <h2 className="gnome__name">{item.name}</h2>
              <img
                className="gnome__image"
                src={item.thumbnail}
                alt={item.name}
              />
              <div className="gnome__lists">
                <ul>
                  Professions:{" "}
                  {item.professions.map((profession, index) => {
                    return <li key={index}>{profession}</li>;
                  })}
                </ul>
                <ul>
                  Friends:{" "}
                  {item.friends.map((friend, index) => {
                    return <li key={index}>{friend}</li>;
                  })}
                </ul>
              </div>
              <div className="gnome__details">
                <p>{item.age}</p>
                <p>{item.height}</p>
                <p>{item.hair_color}</p>
              </div>

            </li>
          );
        })}
      </ul>
    );
  }
}

export default GnomesList;

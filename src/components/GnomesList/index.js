import React, { Component } from "react";
import "./GnomesList.scss";
import Gnome from '../Gnome'

class GnomesList extends Component {
  render() {
    const { gnomesResults } = this.props;
    if (gnomesResults.length===0){
      return <p>No gnome found</p>
    }else{

    return (

      <ul className="gnome__list">
        {gnomesResults.map((item, index) => {
          return (
            <li className="gnome glowButton" key={index}>

              <Gnome 
              name = {item.name}
              image = {item.thumbnail}
              professions = {item.professions}
              friends = {item.friends}
              age = {item.age}
              height= {item.height}
              weight = {item.weight}
              hair_color={item.hair_color}
              />


            </li>
          );
        })}
      </ul>
    )};
  }
}

export default GnomesList;

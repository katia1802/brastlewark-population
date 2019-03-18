import React, { Component } from "react";
import "./GnomesList.scss";
import Gnome from '../Gnome'
import PropTypes from 'prop-types';

class GnomesList extends Component {
  render() {
    const { gnomesResults } = this.props;
    if (gnomesResults.length===0){
      return (
        <div className="gnome__notfound">
        <p className="gnome__notfound-text">No gnome found</p>
        <img alt="noFoundGnome" src="https://i.pinimg.com/564x/5d/ef/7b/5def7b355868d740e6dcd32cd6038e63.jpg"/>
        </div>
      )
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
GnomesList.propTypes = {
  gnomesResults: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default GnomesList;

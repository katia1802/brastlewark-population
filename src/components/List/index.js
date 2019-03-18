import React, { Component } from "react";
import "./List.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';


library.add(faFrown);


class List extends Component {

  render() {
    const { professions, friends } = this.props;

    return (
      <div className="gnome__lists">
        <div>
          <h3 className="gnome__list-professionstitle">Professions</h3>
          <ul className="gnome__list-professions">
          {professions.length!==0
          ? 
          professions.map ((profession,index)=>{
            return <li key={index}>{profession}</li>;
          })
          :
          <div>
          <p>No friends found</p>
          <FontAwesomeIcon icon="frown" />
          </div>
          }
          </ul>
        </div>
        <div>
          <h3 className="gnome__list-friendstitle">Friends</h3>
          <ul className="gnome__list-friends">
            {friends.length!==0
            ?
            friends.map((friend, index)=>{
              return <li key={index}>{friend}</li>})
            :<FontAwesomeIcon icon="frown" />
            }
          </ul>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  professions: PropTypes.arrayOf(PropTypes.object).isRequired,
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default List;

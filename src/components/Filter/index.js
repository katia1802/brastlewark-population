import React, { Component } from 'react';
import './Filter.scss'

class Filter extends Component {
    render() { 
        const {onKeySearch, userSearch} =this.props
        return (
            <div className="app__filter-item">
                <input
                className="app__filter-fullname"
                placeholder="Search your gnome "
                type="text"
                onChange={onKeySearch}
                value={userSearch}
                />
            </div>
          );
    }
}


 
export default Filter;
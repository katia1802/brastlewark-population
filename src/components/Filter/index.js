import React, { Component } from 'react';

class Filter extends Component {
    render() { 
        const {onKeySearch, userSearch} =this.props
        return (
            <div>
                <input
                placeholder="search your Gnome"
                type="text"
                onChange={onKeySearch}
                value={userSearch}
                />
            </div>
          );
    }
}
 
export default Filter;
import React, {Component} from 'react';
import Mushroom from './Mushroom.js';

class MushroomList extends Component {
  render () {
    return (
      <div className="mushroom-container">
        {this.props.mushrooms.map((mushroom) => {
          return (
            <Mushroom
              key={mushroom.id}
              mushroom={mushroom}
              handleClick={this.props.handleClick} 
              />
          )
        })}
      </div>
    );
  }
}

export default MushroomList;

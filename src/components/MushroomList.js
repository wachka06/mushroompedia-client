import React, {Component} from 'react';

class MushroomList extends Component {

  renderMushrooms = () => {
    return (
      <div className="mushroomlist-wrap">
        {this.props.mushrooms.map((mushroom) => {
          return (
            <div className="mushroom-card">
              <img className="mushroom-img" src={mushroom.img_url} alt=""/>
              <div>{mushroom.common_name[0]}</div>
            </div>
          )
        })}
      </div>
    )
  }

  render () {
    // console.log('MushroomList', this.props)
    return (
      <div className="mushroom-container">{this.renderMushrooms()}</div>
    );
  }
}

export default MushroomList;

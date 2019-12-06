import React, {Component, Fragment} from 'react';

class DisplayMushroom extends Component {

renderMushroom = () => {
  let selectedMushroom = this.props.selectedMushroom
    if (selectedMushroom.latin_name) {
      return (
        <div className="mushroom-modal-wrap" style={{visibility: this.props.showMushroom ? 'visible' : 'hidden'}}>
          <div className="close-button" onClick={this.props.handleClose}>&times;</div>
          <div className="mushroom-modal">
            <div className="mushroom-modal-img">
              <img className="mushroom-img" src={selectedMushroom.img_url} alt="" />
              <div><h2 className="mushroom-title">{selectedMushroom.common_name[0]}</h2></div>
            </div>
            <div className="mushroom-modal-info">
              <div><span>Latin Name: </span>{selectedMushroom.latin_name}</div>
              <div><span>Habitat: </span>{selectedMushroom.habitat}</div>
              <div><span>Region: </span>{selectedMushroom.region.join(', ')}</div>
              <div><span>Fairy Rings: </span>{selectedMushroom.fairy_rings ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Often Confused With: </span>{selectedMushroom.confused_with}</div>
              <div><span>Psychoactive: </span>{selectedMushroom.characteristics.psychoactive ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Poisonous: </span>{selectedMushroom.characteristics.poisonous ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Deadly: </span>{selectedMushroom.characteristics.deadly ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Cap: </span>{selectedMushroom.characteristics.cap.join(', ')}</div>
              <div><span>Hymenium: </span>{selectedMushroom.characteristics.hymenium.join(', ')}</div>
              <div><span>Spore Print: </span>{selectedMushroom.characteristics.sporePrint ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Ecology: </span>{selectedMushroom.characteristics.ecology.join(', ')}</div>
            </div>
          </div>
        </div>
      )
    }
  }

  render () {
    return (
      <Fragment>{this.renderMushroom()}</Fragment>
    );
  }
}

export default DisplayMushroom;

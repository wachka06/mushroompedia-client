import React, {Component, Fragment} from 'react'; // Fragment is like <div>, but doesn't break line

class DisplayMushroom extends Component {

renderMushroom = () => {
    // console.log('selectedMush', this.props.selectedMushroom.latin_name)
    if (this.props.selectedMushroom.latin_name) {
      // this.setState({showMushroom: !this.setState.showMushroom})
      return (
        <div className="mushroom-modal-wrap" style={{visibility: this.props.showMushroom ? 'visible' : 'hidden' }}>
          <div className="close-button" onClick={this.props.handleClose}>&times;</div>
          <div className="mushroom-modal">
            <div className="mushroom-modal-img">
              <img className="mushroom-img" src={this.props.selectedMushroom.img_url} alt="" />
              <div><h2 className="mushroom-title">{this.props.selectedMushroom.common_name[0]}</h2></div>
            </div>
            <div className="mushroom-modal-info">

              <div><span>Latin Name: </span>{this.props.selectedMushroom.latin_name}</div>
              <div><span>Habitat: </span>{this.props.selectedMushroom.habitat}</div>
              <div><span>Region: </span>{this.props.selectedMushroom.region}</div>
              <div><span>Fairy Rings: </span>{this.props.selectedMushroom.fairy_rings ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Often Confused With: </span>{this.props.selectedMushroom.confused_with}</div>
              <div><span>Psychoactive: </span>{this.props.selectedMushroom.characteristics.psychoactive ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Poisonous: </span>{this.props.selectedMushroom.characteristics.poisonous ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Deadly: </span>{this.props.selectedMushroom.characteristics.deadly ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Cap: </span>{this.props.selectedMushroom.characteristics.cap.join(', ')}</div>
              <div><span>Hymenium: </span>{this.props.selectedMushroom.characteristics.hymenium.join(', ')}</div>
              <div><span>Spore Print: </span>{this.props.selectedMushroom.characteristics.sporePrint ? <span>&#9900;</span> : <span>&times;</span>}</div>
              <div><span>Ecology: </span>{this.props.selectedMushroom.characteristics.ecology.join(', ')}</div>
            </div>
          </div>
        </div>
      )
    }
  }

  render () {
    // console.log('selected', this.state)
    return (
      <Fragment>{this.renderMushroom()}</Fragment>
    );
  }
}

export default DisplayMushroom;

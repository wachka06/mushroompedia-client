import React, {Component} from 'react';
import ScrollUpButton from "react-scroll-up-button";
import './App.css';
import './ress.css';
import MushroomList from './components/MushroomList'

class App extends Component {
  state = {
    mushrooms: [],
    showForm: false,
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/mushrooms')
    .then(res => res.json())
    .then(mushroomArr => this.setState({mushrooms: mushroomArr}))
  }

  showForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  handleForm = () => {
    return (
      <div className="mushroom-form-modal">
        <div className="close-button" onClick={this.handleClose}>&times;</div>
          <div className="mushroom-form-wrap">
            <h2>Mushroom Form</h2>
            <form className="mushroom-form">
              <label>Common Name: <input type="text" name="common_name" id="mushroom-common-name" /></label>
              <label>Latin Name: <input type="text" name="latin_name" id="mushroom-latin-name" /></label>
              <label>Habitat: <input type="text" name="habitat" id="mushroom-habitat" /></label>
              <label>Region: <input type="text" name="region" id="mushroom-region" /></label>
              <label>Fairy Rings: <input type="text" name="fairy_ring" id="mushroom-fairy-ring" /></label>
              <label>Often Confused With: <input type="text" name="confused_with" id="mushroom-confused-with" /></label>
              <h4><label>Characteristics  </label></h4>
              <label>Psychoactive: <input type="text" name="psychoactive" id="mushroom-psychoactive" /></label>
              <label>Poisonous: <input type="text" name="poisonous" id="mushroom-poisonous" /></label>
              <label>Deadly: <input type="text" name="deadly" id="mushroom-deadly" /></label>
              <label>Cap: <input type="text" name="cap" id="mushroom-cap" /></label>
              <label>Hymenium: <input type="text" name="hymenium" id="mushroom-hymenium" /></label>
              <label>Spore Print: <input type="text" name="spore_print" id="mushroom-spore-print" /></label>
              <label>Ecology: <input type="text" name="ecology" id="mushroom-ecology" /></label>
              <label>Image url (optional): <input type="text" name="url" id="mushroom-url" /></label>
              <input className="mushroom-form-submit-button" type="submit" value="Submit" />
            </form>
          </div>
      </div>
    )
  }

  handleClose = () => {
    this.setState({showForm: !this.state.showForm})
  }

  render () {
    // console.log('s', this.state.mushrooms)
    return (
      <div className="App">
        <div className="add-mushroom" onClick={this.showForm}>add new collection</div>
        {this.state.showForm ? this.handleForm() : null}
        <div className="title">mushroompedia</div>
        <ScrollUpButton />
        <MushroomList mushrooms={this.state.mushrooms} />
      </div>
    );
  }
}

export default App;

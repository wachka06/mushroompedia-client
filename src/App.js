import React, {Component} from 'react';
import ScrollUpButton from "react-scroll-up-button";
import './App.css';
import './ress.css';
import MushroomList from './components/MushroomList'
import DisplayMushroom from './components/DisplayMushroom'

class App extends Component {
  state = {
    mushrooms: [],
    showForm: false,
    showMushroom: true,
    selectedMushroom: {},
    commonNameInput: '',
    latinNameInput: '',
    habitatInput: '',
    regionInput: '',
    fairyRingInput: '',
    confusedWithInput: '',
    psychoactiveInput: '',
    poisonousInput: '',
    deadlyInput: '',
    capInput: '',
    hymeniumInput: '',
    sporePrintInput: '',
    ecologyInput: '',
    urlInput: '',
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/mushrooms')
    .then(res => res.json())
    .then(mushroomArr => this.setState({mushrooms: mushroomArr}))
  }

  showForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  handleShowMushroom = () => {
    this.setState({showMushroom: !this.state.showMushroom}) //toggle
  }

  handleClick = (mushroomObj) => {
    this.setState({selectedMushroom: mushroomObj})
    this.handleShowMushroom()
  }

  handleInput = (e) => {
    // console.log('e', e.target.name)
    if (e.target.name === 'common_name') {
      this.setState({commonNameInput: e.target.value})
    } else if (e.target.name === 'latin_name') {
      this.setState({latinNameInput: e.target.value})
    } else if (e.target.name === 'habitat') {
      this.setState({habitatInput: e.target.value})
    } else if (e.target.name === 'region') {
      this.setState({regionInput: e.target.value})
    } else if (e.target.name === 'fairy_ring') {
      this.setState({fairyRingInput: e.target.value})
    } else if (e.target.name === 'confused_with') {
      this.setState({confusedWithInput: e.target.value})
    } else if (e.target.name === 'psychoactive') {
      this.setState({psychoactiveInput: e.target.value})
    } else if (e.target.name === 'poisonous') {
      this.setState({poisonousInput: e.target.value})
    } else if (e.target.name === 'deadly') {
      this.setState({deadlyInput: e.target.value})
    } else if (e.target.name === 'cap') {
      this.setState({capInput: e.target.value})
    } else if (e.target.name === 'hymenium') {
      this.setState({hymeniumInput: e.target.value})
    } else if (e.target.name === 'spore_print') {
      this.setState({sporePrintInput: e.target.value})
    } else if (e.target.name === 'ecology') {
      this.setState({ecologyInput: e.target.value})
    } else if (e.target.name === 'url') {
      this.setState({urlInput: e.target.value})
    }
  }

  handleForm = () => {
    return (
      <div className="mushroom-form-modal">
        <div className="close-button" onClick={this.handleClose}>&times;</div>
          <div className="mushroom-form-wrap">
            <h2 className="mushroom-form-title">Mushroom Form</h2>
            <form className="mushroom-form" >
              <label>Common Name: <input type="text" name="common_name" id="mushroom-common-name" onChange={this.handleInput} /></label>
              <label>Latin Name: <input type="text" name="latin_name" id="mushroom-latin-name" onChange={this.handleInput} /></label>
              <label>Habitat: <input type="text" name="habitat" id="mushroom-habitat" onChange={this.handleInput} /></label>
              <label>Region: <input type="text" name="region" id="mushroom-region" onChange={this.handleInput} /></label>
              <label>Fairy Rings: <input type="text" name="fairy_ring" id="mushroom-fairy-ring" onChange={this.handleInput} /></label>
              <label>Often Confused With: <input type="text" name="confused_with" id="mushroom-confused-with" onChange={this.handleInput} /></label>
              <h4><label>Characteristics</label></h4>
              <label>Psychoactive: <input type="text" name="psychoactive" id="mushroom-psychoactive" onChange={this.handleInput} /></label>
              <label>Poisonous: <input type="text" name="poisonous" id="mushroom-poisonous" onChange={this.handleInput} /></label>
              <label>Deadly: <input type="text" name="deadly" id="mushroom-deadly" onChange={this.handleInput} /></label>
              <label>Cap: <input type="text" name="cap" id="mushroom-cap" onChange={this.handleInput} /></label>
              <label>Hymenium: <input type="text" name="hymenium" id="mushroom-hymenium" onChange={this.handleInput} /></label>
              <label>Spore Print: <input type="text" name="spore_print" id="mushroom-spore-print" onChange={this.handleInput} /></label>
              <label>Ecology: <input type="text" name="ecology" id="mushroom-ecology" onChange={this.handleInput} /></label>
              <label>Image url (optional): <input type="text" name="url" id="mushroom-url" onChange={this.handleInput} /></label>
              <input className="mushroom-form-submit-button" type="submit" value="Submit" onClick={this.handleSubmitForm}  />
            </form>
          </div>
      </div>
    )
  }

  handleClose = (e) => {
    // console.log('e', e.target.parentNode.className)
    if (e.target.parentNode.className === 'mushroom-form-modal') {
      this.setState({showForm: !this.state.showForm})
    }
    else if (e.target.parentNode.className === 'mushroom-modal-wrap') {
      this.setState({showMushroom: !this.state.showMushroom})
    }
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    // console.log('e', e.target.value)
    fetch('http://localhost:3000/mushrooms', {
      method: 'POST',
      body: JSON.stringify({
        commonNameInput: this.state.commonNameInput,
        latinNameInput: this.state.latinNameInput,
        habitatInput: this.state.habitatInput,
        regionInput: this.state.regionInput,
        fairyRingInput: this.state.fairyRingInput,
        confusedWithInput: this.state.confusedWithInput,
        psychoactiveInput: this.state.psychoactiveInput,
        poisonousInput: this.state.poisonousInput,
        deadlyInput: this.state.deadlyInput,
        capInput: this.state.capInput,
        hymeniumInput: this.state.hymeniumInput,
        sporePrintInput: this.state.sporePrintInput,
        ecologyInput: this.state.ecologyInput,
        urlInput: this.state.urlInput,
      }),
      headers:{
        'Content-Type': 'Application/json'
      }
    })
  }

  render () {
    // console.log('s', this.state.selectedMushroom.latin_name)
    return (
      <div className="App">
        <div className="add-mushroom" onClick={this.showForm}>add new collection</div>
        {this.state.showForm ? this.handleForm() : null}
        <div className="title">mushroompedia</div>
        <ScrollUpButton />
        <MushroomList mushrooms={this.state.mushrooms} handleClick={this.handleClick}
          selectedMushroom={this.state.selectedMushroom} />
        <DisplayMushroom selectedMushroom={this.state.selectedMushroom}
          showMushroom={this.state.showMushroom} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default App;

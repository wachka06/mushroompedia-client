import React, {Component} from 'react';
import ScrollUpButton from "react-scroll-up-button";
import './css/App.scss';
import './css/ress.css';
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
    .then(mushrooms => this.setState({mushrooms}))
  }

  handleShowForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  handleShowMushroom = () => {
    this.setState({showMushroom: !this.state.showMushroom})
  }

  handleClick = (mushroomObj) => {
    this.setState({selectedMushroom: mushroomObj})
    this.handleShowMushroom()
  }

  handleInput = (e) => {
    let tagName = e.target.name
    let userInput = e.target.value
    if (tagName === 'common_name') {
      this.setState({commonNameInput: userInput})
    } else if (tagName === 'latin_name') {
      this.setState({latinNameInput: userInput})
    } else if (tagName === 'habitat') {
      this.setState({habitatInput: userInput})
    } else if (tagName === 'region') {
      this.setState({regionInput: userInput})
    } else if (tagName === 'fairy_ring') {
      this.setState({fairyRingInput: userInput})
    } else if (tagName === 'confused_with') {
      this.setState({confusedWithInput: userInput})
    } else if (tagName === 'psychoactive') {
      this.setState({psychoactiveInput: userInput})
    } else if (tagName === 'poisonous') {
      this.setState({poisonousInput: userInput})
    } else if (tagName === 'deadly') {
      this.setState({deadlyInput: userInput})
    } else if (tagName === 'cap') {
      this.setState({capInput: userInput})
    } else if (tagName === 'hymenium') {
      this.setState({hymeniumInput: userInput})
    } else if (tagName === 'spore_print') {
      this.setState({sporePrintInput: userInput})
    } else if (tagName === 'ecology') {
      this.setState({ecologyInput: userInput})
    } else if (tagName === 'url') {
      this.setState({urlInput: userInput})
    }
  }

  handleForm = () => {
    return (
      <div className="mushroom-form-modal">
        <div className="close-button" onClick={this.handleClose}>&times;</div>
          <div className="mushroom-form-wrap">
            <h2 className="mushroom-form-title">Mushroom Form</h2>
            <form className="mushroom-form" onSubmit={this.handleSubmitForm}>
              <label>Common Name: <input type="text" name="common_name" id="mushroom-common-name" onChange={this.handleInput} /></label>
              <label>Latin Name: <input type="text" name="latin_name" id="mushroom-latin-name" onChange={this.handleInput} /></label>
              <label>Habitat: <input type="text" name="habitat" id="mushroom-habitat" onChange={this.handleInput} /></label>
              <label>Region: <input type="text" name="region" id="mushroom-region" onChange={this.handleInput} /></label>
              <label>Fairy Rings: <span onChange={this.handleInput}><input type="radio" name="fairy_ring" value="true" className="radio-button" />
              &#9900; <input type="radio" name="fairy_ring" value="false" className="radio-button" />&times; </span></label>
              <label>Often Confused With: <input type="text" name="confused_with" id="mushroom-confused-with" onChange={this.handleInput} /></label>
              <h4 style={{marginTop: '0.5em'}}><label>Characteristics</label></h4>
              <label>Psychoactive: <span onChange={this.handleInput}><input type="radio" name="psychoactive" value="true" className="radio-button" />
              &#9900; <input type="radio" name="psychoactive" value="false" className="radio-button" />&times; </span></label>
              <label>Poisonous: <span onChange={this.handleInput}><input type="radio" name="poisonous" value="true" className="radio-button" />
              &#9900; <input type="radio" name="poisonous" value="false" className="radio-button" />&times; </span></label>
              <label>Deadly: <span onChange={this.handleInput}><input type="radio" name="deadly" value="true" className="radio-button" />
              &#9900; <input type="radio" name="deadly" value="false" className="radio-button" />&times; </span></label>
              <label>Cap: <input type="text" name="cap" id="mushroom-cap" onChange={this.handleInput} /></label>
              <label>Hymenium: <input type="text" name="hymenium" id="mushroom-hymenium" onChange={this.handleInput} /></label>
              <label>Spore Print: <input type="text" name="spore_print" id="mushroom-spore-print" onChange={this.handleInput} /></label>
              <label>Ecology: <input type="text" name="ecology" id="mushroom-ecology" onChange={this.handleInput} /></label>
              <label>Image url: <input type="text" name="url" id="mushroom-url" onChange={this.handleInput} /></label>
              <input className="mushroom-form-submit-button" type="submit" value="Submit" style={{marginTop: '2em', fontWeight: 'bold'}} />
            </form>
          </div>
      </div>
    )
  }

  handleClose = (e) => {
    if (e.target.parentNode.className === 'mushroom-form-modal') {
      this.setState({showForm: !this.state.showForm})
    }
    else if (e.target.parentNode.className === 'mushroom-modal-wrap') {
      this.setState({showMushroom: !this.state.showMushroom})
    }
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/mushrooms', {
      method: 'POST',
      body: JSON.stringify({
        latin_name: this.state.latinNameInput,
        common_name: [this.state.commonNameInput],
        confused_with: [this.state.confusedWithInput],
        region: [this.state.regionInput],
        habitat: this.state.habitatInput,
        fairy_rings: this.state.fairyRingInput,
        characteristics: {
          psychoactive: this.state.psychoactiveInput,
          poisonous: this.state.poisonousInput,
          deadly: this.state.deadlyInput,
          cap: [this.state.capInput],
          hymenium: [this.state.hymeniumInput],
          sporePrint: [this.state.sporePrintInput],
          ecology: [this.state.ecologyInput],
        },
        img_url: this.state.urlInput,
      }),
      headers:{
        'Content-Type': 'Application/json'
      }
    })
    this.handleShowForm()
  }

  render () {
    return (
      <div>
        <div className="add-mushroom" onClick={this.handleShowForm}>add new collection</div>
        {this.state.showForm ? this.handleForm() : null}
        <div className="title">mushroompedia</div>
        <ScrollUpButton />
        <MushroomList
          mushrooms={this.state.mushrooms}
          handleClick={this.handleClick}
          selectedMushroom={this.state.selectedMushroom}
        />
        <DisplayMushroom
          selectedMushroom={this.state.selectedMushroom}
          showMushroom={this.state.showMushroom}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default App;

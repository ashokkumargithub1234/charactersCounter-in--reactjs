import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {charactersList: [], characters: ''}

  renderNoUserImage = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
      className="no-user-image"
    />
  )

  onEnterCharacter = event => {
    this.setState({characters: event.target.value})
  }

  addCounter = event => {
    event.preventDefault()
    const {characters, charactersList} = this.state
    const newCharacters = {
      id: v4(),
      name: characters,
      length: characters.length,
    }
    this.setState({
      charactersList: [...charactersList, newCharacters],
      characters: '',
    })
  }

  renderCharactersList = charactersList => (
    <ul className="list-container">
      {charactersList.map(eachObject => (
        <li className="list" key={eachObject.id}>
          <p className="character-paragraph">
            {eachObject.name} : {eachObject.length}
          </p>
        </li>
      ))}
    </ul>
  )

  render() {
    const {charactersList, characters} = this.state
    console.log(charactersList)
    return (
      <div className="app-container">
        <div className="character-list-container">
          <h1 className="list-heading">Count the characters like a Boss...</h1>
          {charactersList.length > 0
            ? this.renderCharactersList(charactersList)
            : this.renderNoUserImage()}
        </div>
        <div className="character-input">
          <h1 className="counter-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.addCounter}>
            <input
              type="text"
              className="input"
              value={characters}
              placeholder="Enter the Characters here"
              onChange={this.onEnterCharacter}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App

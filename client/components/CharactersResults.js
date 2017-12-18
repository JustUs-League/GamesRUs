import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CharactersResults extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const characters = this.props.characters
    console.log(characters)

    return (
      <div>
        <h2>CharactersResults</h2>
        {characters && characters.map(character => {
          return (
            <div key={character.id} className="item">
              <h4>{character.name}</h4>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    characters: state.charactersSearch.length ? state.charactersSearch : []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersResults)

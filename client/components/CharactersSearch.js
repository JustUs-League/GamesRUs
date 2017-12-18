import React, {Component} from 'react'
import { connect } from 'react-redux'
import history from '../history'
import { findCharacters } from '../store'
import CharactersResults from './CharactersResults'

class CharactersSearch extends Component {
	constructor(props){
		super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit (event) {
		event.preventDefault()
		const search = event.target.search.value

		this.props.searchForCharacters(search)

	}

	render () {
		return (
			<div>
        <form onSubmit={ this.handleSubmit }>
            <div>
              <h4>Search: </h4>
              <input
                type="text"
                placeholder="Search"
                name="search"
              />
            </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        <CharactersResults />
      </div>

		)
	}
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    characters: state.charactersSearch.length ? state.charactersSearch : []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchForCharacters(search) {
      dispatch(findCharacters({search}))
      history.push('/characters/charactersSearch')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersSearch)


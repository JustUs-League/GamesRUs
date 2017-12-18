import React, {Component} from 'react'
import { connect } from 'react-redux'
import history from '../history'
import { findGames } from '../store'
import GameResults from './GameResults'

class GameSearch extends Component {
	constructor(props){
		super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit (event) {
		event.preventDefault()
		const search = event.target.search.value

		this.props.searchForGame(search)

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
        <GameResults />
      </div>

		)
	}
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    gameSearch: state.gameSearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchForGame(search) {
      const searchQuery = { search }
      dispatch(findGames(searchQuery))
      history.push('/game/gameSearch')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSearch)


import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class GameResults extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const searchedGames = this.props.searchedGames

    return (
      <div>
        <h1>List of Games from IDGB.com: </h1>
        {searchedGames && searchedGames.map(game => {
          return (
            <div key={game.id} className="item">
              <img className="game-img" src={game.cover && 'https:' + game.cover.url} />
              <Link to={`/game/${game.id}`} key={game.id}>
                <h4>Name: {game.name}</h4>
              </Link>
              <h6>Summary: {game.summary}</h6>
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
    searchedGames: state.gameSearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameResults)

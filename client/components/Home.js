import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const games = this.props.games
    console.log(games[0])

    return (
      <div>
        <h1>List of Games from IDGB.com: </h1>
        {games.map(game => {
          return (
            <div key={game.id} className="item">
              <img className="game-img" src={game.cover.url} />
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

const mapStateToProps = (state) => {
  return {
    games: state.games.length ? state.games.filter(game => game.popularity > 1.25) : []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

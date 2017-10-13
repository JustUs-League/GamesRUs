import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount (){
    axios.get('/api/games')
    .then(res => res.data)
    .then(games => {
      this.setState({
        games
      })
    })
  }

  render () {

    const games = this.state.games.filter(game => game.popularity > 1.25)

    return (
      <div>
        <h1>List of Games from IDGB.com: </h1>
        {games.map(game => {
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

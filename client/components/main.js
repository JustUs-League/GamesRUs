import React, {Component} from 'react'
import axios from 'axios'

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

    const games = this.state.games

    return (
      <div>
        {games.map(game => {
          return (
              <div key={game.id} className="item">
                <img src={game.cover && game.cover.url.slice(2)} />
                <h4>Name: {game.name}</h4>
                <h6>Summary: {game.summary}</h6>
                <h5>Popularity: {game.popularity}</h5>
              </div>
            )
        })}
      </div>
    )
  }
}

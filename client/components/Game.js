import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedGame: {}
    }
  }

  componentDidMount (){
    const gameId = this.props.match.params.gameId

    axios.get(`/api/games/${gameId}`)
    .then(res => res.data)
    .then(selectedGame => {
      this.setState({
        selectedGame: selectedGame[0]
      })
    })
  }

  render () {
    const game = this.state.selectedGame

    console.log('Game....', this.state.selectedGame)

    return (
      <div>
        <img className="game-img" src={game.cover && 'https:' + game.cover.url} height="300" width="300" />
        <h3>{game.name}</h3>
        <h5>Summary: {game.summary}</h5>
        <h4>Popularity: {game.popularity}</h4>
        {game.screenshots && game.screenshots.map((screen, index) => {
          return (

            <img
              key={index}
              src={'https:' + screen.url}
              className="screenshot"
              height="200"
              width="200"
            />
          )
        })}
      </div>
    )
  }
}

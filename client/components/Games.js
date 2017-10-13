import React, {Component} from 'react'
import axios from 'axios'

export default class Games extends Component {
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
				{games && games.map(game => {
					return (
							<div key={game.id}>
								<h4>Name: {game.name}</h4>
								<h4>Summary: {game.summary}</h4>
								<h5>Popularity: {game.popularity}</h5>
							</div>
						)
				})}
			</div>
		)
	}
}

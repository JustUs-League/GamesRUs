import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import {Home, Game, GameSearch, Navbar, CharactersSearch} from './components'
import { loadGames } from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount (){
    this.props.loadAllGames()
  }

  render () {
    return (
      <Router history={history}>
        <div>
          <Navbar />
            <div className="container">
              <Switch>
                {/* Routes placed here are available to all visitors */}
                <Route exact path="/home" component={Home} />
                <Route exact path="/game/gameSearch" component={GameSearch} />
                <Route exact path="/game/:gameId" component={Game} />
                <Route exact path="/characters/charactersSearch" component={CharactersSearch} />
                <Route component={Home} />
              </Switch>
            </div>
        </div>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadAllGames() {
      dispatch(loadGames())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

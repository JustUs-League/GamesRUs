import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import {Home, Game, GameSearch, Navbar} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              {/* Routes placed here are available to all visitors */}
              <Route exact path="/home" component={Home} />
              <Route exact path="/game/gameSearch" component={GameSearch} />
              <Route exact path="/game/:gameId" component={Game} />
              <Route component={Home} />
            </Switch>
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
  }
}

export default connect(mapState, mapDispatch)(Routes)

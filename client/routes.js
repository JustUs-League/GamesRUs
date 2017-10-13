import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import {Main, Game} from './components'

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
            <Switch>
              {/* Routes placed here are available to all visitors */}
              <Route exact path="/" component={Main} />
              <Route path="/game/:gameId" component={Game} />
              <Route component={Main} />
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

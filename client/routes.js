import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import history from './history'
import {Main, Games} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  render () {
    return (
      <Router history={history}>
        <Main>
          <div>
            <Switch>
              {/* Routes placed here are available to all visitors */}
              <Route path="/games" component={Games} />
              <Route component={Games} />
            </Switch>
          </div>
        </Main>
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

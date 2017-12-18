import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
          <Link to="/home"><h4>HOME</h4></Link>
          <Link to="/game/gameSearch"><h4>SEARCH GAMES</h4></Link>
          <Link to="/characters/charactersSearch"><h4>SEARCH CHARACTER</h4></Link>
        </div>
    </nav>
  )
}

const mapState = state => {
  return {
  }
}

const mapDispatch = dispatch => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Navbar)

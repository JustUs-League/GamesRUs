import React from 'react'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'

/* -----------------    COMPONENT     ------------------ */

const orderState = ['ALL', 'CREATED', 'PROCESSING', 'CANCELLED', 'COMPLETED']

class OrderList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      status: 'ALL',
      name: ''
    }

    this.filterOrder = this.filterOrder.bind(this)
    this.renderOrderSearch = this.renderOrderSearch.bind(this)
  }

  render () {
    const {orders, currentUser} = this.props
    if (!orders.length) return (<div>NO ORDERS TO DISPLAY</div>)
    if (!currentUser.isAdmin) return (<div>Only Admin can view all Orders</div>)
    return (
      <div className="container">
        <div className="row heading text-center">
          <div className="col-lg-6 col-lg-offset-3">
            <h3 className="display-5">ORDER LIST</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-lg-offset-3">
            {this.renderOrderSearch()}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-lg-offset-3">
            <ul className="list-group">
              {
                orders
                  .filter(this.filterOrder)
                  .map(order => <OrderItem order={order} key={order} />)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderOrderSearch () {
    return (
      <div>
        <select
          className="form-control"
          name="status"
          defaultValue=""
          onChange={evt => this.setState({status: evt.target.value})}
          required
        >
          <option value="" disabled>Filter By Status</option>
          {
            orderState.map(stat => (
              <option key={stat} value={stat}>{stat}</option>
            ))
          }
        </select>
      </div>
    )
  }

  filterOrder (order) {
    const statusMatch = (this.state.status !== 'ALL')
      ? new RegExp(this.state.status, 'i')
      : new RegExp('', 'i')
    return statusMatch.test(order.status)
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({orders, currentUser}) => ({orders, currentUser})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(OrderList)

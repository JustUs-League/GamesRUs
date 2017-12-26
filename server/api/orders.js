const router = require('express').Router();
const { Order, OrderDetails, User } = require('../db/models');

router.get('/', (req, res, next) => {
    Order.findAll({
      include: [ { model: User} ]
    })
    .then(AllOrders => {
      res.json(AllOrders)
    })
    .catch(next)
});

router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId, {
    include: [{ model: User} , { model: OrderDetails} ]
  })
  .then(orderWithAll => {
    res.json(orderWithAll)
  })
  .catch(next)
})

router.get('/byUserId/:userId', (req, res, next) => {
  Order.findAll({
    where: req.params
  },{
    include: [ { model: User } ]
  })
  .then(singleUserOrders => {
    res.json(singleUserOrders)
  })
  .catch(next)
})

router.get('/byStatus/:status', (req, res, next) => {
  Order.findAll({
    where:  req.params
  },{
    include: [{ User }]
  })
  .them(requestedStatusOrders => {
    res.json(requestedStatusOrders)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  const { productsOrdered } = req.body;
  Order.create(req.body)
  .then(createdOrder => {
    return Promise.map(productsOrdered, (product) => {
      return OrderDetails.create(product)
      .then(createdOrderDetail => {
        return createdOrder.addOrderDetail(createdOrderDetail)
      })
    })
    .then(() => {
      // createdOrder.setUser()
      res.json(createdOrder)
    })
  })
})

router.put('/:orderId', (req, res, next) => {
  Order.update({ where: { orderId: req.params.orderId }}, req.body)

})

module.exports = router;

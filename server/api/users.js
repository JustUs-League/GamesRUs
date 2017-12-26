const router = require('express').Router();
const { User, Order, Review } = require('../db/models')

// wanted to use scopes but they're being RUDE AF/

router.get('/', (req, res, next) => {
  User.findAll()
  .then(allUsers =>
        res.json(allUsers)
  )
  .catch(next)
});


router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId, {
    include: [{ model: Order }, { model: Review }]
  })
  .then(userWithInfo => {
    res.json(userWithInfo);
  })
  .catch(next)
})

router.put('/:userId', (req, res, next) => {
  const { userId } = req.params;
  User.update(req.body, {
    where: { userId },
    returning: true,
    include: [{ model: Order }, { model: Review }],
  })
  .then(updatedUser => {
    res.json(updatedUser);
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(createdUser => {
    res.json(createdUser)
  })
  .catch(next);
})

module.exports = router;

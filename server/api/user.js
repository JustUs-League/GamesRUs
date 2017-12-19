const router = require('express').Router();
const { User } = require('../db/models')




router.get('/', (req, res,next) => {
  User.findAll()
  .then(allUsers =>
        res.json(allUsers)
  )
  .catch(next)
});


router.get('/:userId', (req, res, next) => {
  User.scope('withAll').findById(req.params.userId)
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

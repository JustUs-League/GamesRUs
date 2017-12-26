const router = require('express').Router()
const { Review, User } = require('../db/models')


router.get('/', (req, res, next) => {
  Review.findAll({
    include: [{ model: User }]
  })
  .then(allReviews => { res.json(allReviews)})
  .catch(next)
})

router.get('/:reviewId', (req, res, next) => {
  Review.findById(req.params.reviewId, {
    include: [{ model: User}]
  })
  .then(foundReview => res.json(foundReview))
  .catch(next)
})

router.get('/byGameId/:gameId', (req, res, next) => {
  Review.findByGameId(req.params.gameId)
  .then(allReviewsForGame => {
    res.json(allReviewsForGame)
  })
})


router.put('/:reviewId', (req, res, next) => {
  Review.update(req.body, {
    where: { reviewId: req.params.reviewId },
    include: [{ model: User }],
    returning: true,
  })
  .then(updatedReview => res.json(updatedReview))
  .catch(next)
})
module.exports = router;

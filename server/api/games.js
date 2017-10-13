const router = require('express').Router()
const igdb = require('igdb-api-node').default
const client = igdb('eea95ee6a4e778f7150932344ae6cdca')


router.get('/', (req, res, next) => {
	client.games({
      filters: {
          'release_dates.date-gt': '1980-12-31',
          'release_dates.date-lt': '2015-01-01'
      },
      fields: '*', // Return all fields
      limit: 25, // Limit to 5 results
      offset: 10, // Index offset for results
      search: 'zelda'  // Search for only 'zelda' games
    })
    .then(response => {
        // response.body contains the parsed JSON response to this query
        res.json(response.body)
    })
    .catch(next)
})

router.get('/:gameId', (req, res, next) => {
  const gameId = +req.params.gameId

  client.games({
    ids: [gameId]
  })
  .then(response => {
    res.json(response.body)
  })
  .catch(next)

})


module.exports = router

const router = require('express').Router()
const igdb = require('igdb-api-node').default
const client = igdb('eea95ee6a4e778f7150932344ae6cdca')


router.get('/', (req, res, next) => {
	client.characters({
      fields: '*', // Return all fields
      limit: 25, // Limit to 5 results
      offset: 10, // Index offset for results
      search: 'Mario'
    })
    .then(response => {
        // response.body contains the parsed JSON response to this query
        res.json(response.body)
    })
    .catch(next)
})

router.get('/:characterID', (req, res, next) => {
  const characterID = +req.params.characterID

  client.characters({
    ids: [characterID]
  })
  .then(response => {
    res.json(response.body)
  })
  .catch(next)

})

router.post('/search', (req, res, next) => {
  client.characters({
      fields: '*',
      limit: 25,
      offset: 10,
      search: req.body.search
    })
    .then(response => {
        res.json(response.body)
    })
    .catch(next)
})


module.exports = router

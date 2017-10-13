const router = require('express').Router()
const igdb = require('igdb-api-node').default
const client = igdb('eea95ee6a4e778f7150932344ae6cdca')


router.get('/', (req, res, next) => {
	client.games({
      fields: '*', // Return all fields
      limit: 15, // Limit to 5 results
      offset: 20 // Index offset for results
    })
    .then(response => {
        // response.body contains the parsed JSON response to this query
        res.json(response.body)
    })
    .catch(next)
})


module.exports = router

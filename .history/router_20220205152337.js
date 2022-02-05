const { getTodos } = require('./controllers/Todo')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.send("Let's build a CRUD API!")
})

router.get('/todos', getTodos)



module.exports = router

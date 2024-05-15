const router = require('express').Router()
const jobRouter = require('./jobRouter')

// http://localhost:8000/jobs?search=1
router.use('/jobs', jobRouter) 


module.exports = router
const router = require('express').Router()
const { getJobs } = require('../service/jobService.js')

router.get('/', getJobs)

module.exports = router
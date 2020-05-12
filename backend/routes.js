const router = require('express').Router()

const { API_ROUTES } = require('./constant')
const { getDeploymentDetails, addDeploymentInfo, deleteDeploymentInfo } = require('./deployment/controller')

router.get(API_ROUTES, getDeploymentDetails)
router.post(API_ROUTES, addDeploymentInfo)
router.delete(API_ROUTES, deleteDeploymentInfo)

module.exports = router

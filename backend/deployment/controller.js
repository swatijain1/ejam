const Deployment = require('./model')
const {
  TEMPLATE_NAME_ERROR,
  TEMPLATE_NAME_REGEX,
  DELETE_DEPLOYMENT,
  ADDED_DEPLOYMENT
} = require('../constant')

/*
  Get list of deployments 
*/
const getDeploymentDetails = (req, res) => {
  Deployment.find({}, (err, data) => {
    if(err) {
      res.send(err)
      return
    }
    
    const response = data.map(detail => {
      const { url, templateName, version, deployedAt } = detail
      return { url, templateName, version, deployedAt }
    })

    res.send(response)
  })
}

/*
  Add a deployment info
*/
const addDeploymentInfo = (req, res) => {

  const { url, templateName, version } = req.body

  const DeploymentInfo = new Deployment({
    url, templateName, version
  })

  // allow only alphanumeric, and special character dot, hyphen, space
  const templeteNameRegex = new RegExp(TEMPLATE_NAME_REGEX)
  
  if(templeteNameRegex.test(templateName)) {
    res.send(TEMPLATE_NAME_ERROR)
  }
  
  DeploymentInfo.save({}, (err, data) => {
    if(err) {
      res.send(err)
      return
    }

    res.send(ADDED_DEPLOYMENT)
  })
}

/*
  Delete a deployment entry
*/
const deleteDeploymentInfo = (req, res) => {
  const { templateName } = req.query

  Deployment.deleteOne({ templateName }, (err, data) => {
    if(err) {
      res.send(err)
      return
    }
    
    res.send(DELETE_DEPLOYMENT)
  })
}

module.exports = {
  getDeploymentDetails,
  addDeploymentInfo,
  deleteDeploymentInfo
}

const mongoose = require('mongoose')
const {
  SAVE_OPERATION,
  DEPLOYMENT_MODEL_NAME,
  VERSION_ERROR,
  VERSION_REGEX
} = require('../constant')

const Schema = mongoose.Schema

const DeploymentSchema =  new Schema({
  url: { 
    type: String,
    required: true
  },
  templateName: { 
    type: String,
    required: true,
    unique: true
  },
  version: { 
    type: String,
    required: true
  },
  deployedAt: {
    type: Date,
    default: Date.now
  }
})

DeploymentSchema.pre(SAVE_OPERATION, () => {
  const versionRegex = VERSION_REGEX
  
  if(!versionRegex.test(this.version)) {
    return next(new Error(VERSION_ERROR))
  }
  
  next()
})

const deployment = mongoose.model(DEPLOYMENT_MODEL_NAME, DeploymentSchema)

module.exports = deployment

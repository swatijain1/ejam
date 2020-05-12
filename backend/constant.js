const MONGO_CONNECTION_SUCCESS = 'Successfully connected to mongoDB cloud'
const SERVER_CONNECTION_SUCCESS = 'Successfully connected with server'
const ADDED_DEPLOYMENT = 'Added successfully'
const DELETE_DEPLOYMENT = 'Entry deleted successfully'

const MONGO_CONNECTION_ERROR = 'Problem in connecting with mongoDB cloud'
const SERVER_CONNECTION_ERROR = 'Problem in connecting with server' 
const TEMPLATE_NAME_ERROR = 'Invalid template name'
const VERSION_ERROR = 'Invalid version number'

const TEMPLATE_NAME_REGEX = '/^[A-Za-z0-9*, .]*$/'
const VERSION_REGEX = '/^v(\d+\.)(\d+\.)(\d)$/'

const SAVE_OPERATION = 'save'
const DEPLOYMENT_MODEL_NAME = 'deployment'

const API_ROUTES = '/api/v1/deployment'

module.exports = {
  SAVE_OPERATION,
  DEPLOYMENT_MODEL_NAME,
  MONGO_CONNECTION_SUCCESS,
  SERVER_CONNECTION_SUCCESS,
  ADDED_DEPLOYMENT,
  DELETE_DEPLOYMENT,
  MONGO_CONNECTION_ERROR,
  SERVER_CONNECTION_ERROR,
  VERSION_ERROR,
  TEMPLATE_NAME_ERROR,
  TEMPLATE_NAME_REGEX,
  VERSION_REGEX,
  API_ROUTES
}
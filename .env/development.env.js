//
// development.env.js
//
const envCommon = require('./common.env.js')

const envDevelopment = {
  ...envCommon,
  PATH_BASE: '',
}

module.exports = envDevelopment

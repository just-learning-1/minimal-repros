//
// test.env.js
//
const envCommon = require('./common.env.js')

const envTest = {
  ...envCommon,
  PATH_BASE: '',
}

module.exports = envTest

const path = require('path')
const pkg = require('../package.json')

const ENV = process.env.NODE_ENV || 'development'
const IS_PROD = ENV === 'production'

const VERSION = `v${pkg.version}`
const PROJECT_DIR = path.resolve(__dirname, '../')
const SOURCE_DIR = path.resolve(PROJECT_DIR, './src')
const OUTPUT_DIR = path.resolve(PROJECT_DIR, './dist')
const CLIENT_DIR = path.join(OUTPUT_DIR, VERSION)

const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = 8088

module.exports = {
  ENV,
  IS_PROD,
  PROJECT_DIR,
  SOURCE_DIR,
  CLIENT_DIR,
  SERVER_HOST,
  SERVER_PORT,
}

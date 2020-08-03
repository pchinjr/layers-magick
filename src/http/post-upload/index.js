let arc = require('@architect/functions')
const { execSync } = require("child_process");

exports.handler = async (event) => {
  execSync('gm version', { encoding: 'utf8', stdio: 'inherit' })
}
let arc = require('@architect/functions')
const { execSync } = require("child_process");
const os = require('os')
exports.handler = async function http(request) {
  
  console.log(os.homedir())

  //execSync( 'gm version', { encoding: 'utf8', stdio: 'inherit' })
  
  return {
    headers: {'content-type': 'text/html; charset=utf-8;'},
    body: '<h1>Hello World! 🎉</h1>'
  }
}
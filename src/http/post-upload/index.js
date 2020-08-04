let arc = require('@architect/functions')
const { execSync } = require("child_process");

exports.handler = async function http(request) {
  
  execSync('which gm', { encoding: 'utf8', stdio: 'inherit' })
  
  return {
    headers: {'content-type': 'text/html; charset=utf-8;'},
    body: '<h1>Hello World! 🎉</h1>'
  }
}
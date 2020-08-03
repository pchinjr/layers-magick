let arc = require('@architect/functions')

const { execSync } = require("child_process");

async function resizeAvatar(req, context,) {

  execSync('gm version', { encoding: 'utf8', stdio: 'inherit' })
  
  console.log(req.body)
  
  return {
    statusCode: 200,
    body: "praise cage"
  }
}

exports.handler = arc.http.async(resizeAvatar)
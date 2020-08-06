// learn more about HTTP functions here: https://arc.codes/primitives/http
const { execSync } = require('child_process')

exports.handler = async function http (req) {

  await execSync('gm version', { encoding: 'utf8', stdio: 'inherit' })
  await execSync('gm convert -size 640x480 xc:red canvas.png', { encoding: 'utf8', stdio: 'inherit' })

  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `Praise Cage`
  }
}
// learn more about HTTP functions here: https://arc.codes/primitives/http
const { execSync } = require('child_process')
const fs = require('fs')

exports.handler = async function http (req) {

  await execSync('gm convert -size 120x120 me_sloth.jpg -resize 120x120 +profile "*" /tmp/thumbnail.png', { encoding: 'utf8', stdio: 'inherit' })

  let image = fs.readFileSync('/tmp/thumbnail.png')

  return {
    headers: {
      "statusCode": 200,
      "Content-Type": 'image/png'
    },
    body: image.toString('base64'),
    isBase64Encoded: true
  }
}
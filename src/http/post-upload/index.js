let arc = require('@architect/functions')

const { exec } = require("child_process");

async function resizeAvatar(req) {

  exec('ls', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });

  console.log(req.body)
  
  return {
    statusCode: 200,
    body: "praise cage"
  }
}

exports.handler = arc.http.async(resizeAvatar)
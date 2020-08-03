// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {
  
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
</head>
<body class="padding-32">
  <div id="results"></div>
  <a href="/">Back to Form</a>
  <script type="module" src="index.js"></script>
</body>
</html>
`
  }
}
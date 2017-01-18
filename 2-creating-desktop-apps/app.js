document.write('The current version of io.js' + process.version)

let fs = require('fs')

let contents = fs.readFileSync('./package.json', 'utf8')
alert(contents)

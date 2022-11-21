const fs = require('fs')
const file = fs.readFileSync('text.txt','utf8')
console.log(file)

fs.writeFileSync('text.txt', 'Erons is')
fs.appendFileSync('text.txt',' Bastard')
var fs = require('fs');

fs.appendFile('mynewfile3.txt', 'Node.js', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 
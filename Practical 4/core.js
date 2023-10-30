const fs = require('fs');


fs.readFile('demofile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File data:', data);
});

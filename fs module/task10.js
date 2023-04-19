const fs = require('fs');

const readStream = fs.createReadStream('file.txt','utf-8');

readStream.on('data', (chunk) => {
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('File read successfully');
});
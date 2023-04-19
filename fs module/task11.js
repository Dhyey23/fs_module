const fs = require("fs")

var content = fs.createWriteStream("test.txt")

content.write("dhyey patel")

content.on('end', () => {
    console.log('File read successfully');
  });

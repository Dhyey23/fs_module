const fs = require('fs');

fs.readdir('./demo2', (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink("./demo2/ex.js", (err) => {
      if (err) throw err;
    });
  }

  console.log('files deleted successfully');
});
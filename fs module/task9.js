//Delete all the files with a particular extension.
const fs = require('fs');

const extension = '.txt';
try{
fs.readdir('./demo2', (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if (file.endsWith(extension)) {
      fs.unlink(`./demo2/${file}`, (err) => {
        if (err) throw err;
      });
    }
  }

  console.log("files deleted successfully");
});
}
catch(err){
  console.log(err)
}
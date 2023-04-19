
const fs = require('fs');
try {
  const folderPath = './'; 
  const extension = '.js'; 
  fs.readdir(folderPath, (err,files) => {
    if (err) console.log(err);
    const filteredFiles = files.filter(file => file.endsWith(extension));
    console.log(filteredFiles);
  });
} catch (err) {
  console.error(err);
}

//////////////////////readdirSync
const fs = require('fs');
try {
  const folderPath = './'; 
  const extension = '.js'; 
  const files=fs.readdirSync(folderPath);
  // console.log(files);
  const filteredFiles = files.filter(file => file.endsWith(extension));
  console.log(filteredFiles);
} catch (err) {
  console.error(err);
}
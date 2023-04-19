
const fs = require('fs');
const prompt = require('prompt-sync')();

const fileName = prompt("Enter file name: ");
try {
  fs.readFile(fileName, 'utf8', (err,data) => {
    if(err){
      console.log(err)
    }
    
    console.log(data);
  });
} catch (err) {
  console.error(err);
}


const fs = require('fs');
const prompt = require('prompt-sync')();


var fileName = prompt("Enter the file name: ")
var content = prompt("enter the content: ")
try{
fs.writeFile(fileName, content,(err) => {
  if (err){
    console.log(err);
  }
  else{
    console.log('Content written successfully');
   }
});
}
catch(err){
  console.log(err)
}

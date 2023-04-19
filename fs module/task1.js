
const fs = require('fs');
const folderPath = './'; 

try{
fs.readdir(folderPath, (err,files) => {
  if(err){
    console.log(err)
  }
  console.log(files);
});
}catch (err){
  console.log(err)
}











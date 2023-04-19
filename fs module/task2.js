
const fs = require('fs');
const folderName = 'dhyey';


// Create a folder
// try{
// fs.mkdir(folderName, () => {
  
//   console.log(`${folderName} created successfully`);
// });
// }catch(err){
//   console.log(err)
// }

// Delete a folder
try{
fs.rmdir(folderName, () => {
  
  console.log(`${folderName} deleted successfully`);
});
}
catch(err){
  console.log(err)
}
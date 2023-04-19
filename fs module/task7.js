
const fs = require('fs');
try{
    function moveFile(oldfilelocation, newfileLocation){
        fs.rename(oldfilelocation,newfileLocation, function(err){
         if(err){
            console.log("Error: ",err);
            }
        else{
                console.log("move file successfuly");
            }
        }
    )}
        moveFile('./demo2/t1.js','./demo1/t1.js')
}
catch{
    console.log("Error: " + err);
}


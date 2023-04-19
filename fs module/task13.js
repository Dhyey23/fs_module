// 13. perform example which includes all the above functionality in one.
// - log should be like this.
// - reading file <file name> 1
// - file content is this 2
// - <print file content here> 3
// - write to file <file name> 4
// - write operation is completed 5
// - file content after write 6
// - <print file content here> 7
// - appending content to the file 8
// - append operation is completed 9
// - < print file content here> 10 
// - change file permission to read only 11
// - trying to write content in file 12
// - error while write to file. 13

const fs = require("fs")
var fileName = "task13.txt"
try{

    console.log("reading file is: ",fileName)
    console.log("file content is this: ",(fs.readFileSync('task13.txt','utf-8')))

    console.log("write to file is:",fileName)
    console.log("operation is completed")

    fs.writeFileSync('task13.txt',"operation is completed ")

     console.log("file content after write: ",(fs.readFileSync('task13.txt','utf-8')))
    //console.log("appending content to the file")
    fs.appendFile('task13.txt','this is my append text',function(err){
        console.log(err)
    })
    console.log(fs.readFileSync('task13.txt','utf-8'))
    fs.chmod("task13.txt", 0o222, () => {
        try {
          console.log("\nReading the file contents");
          console.log(fs.readFileSync("task13.txt", 'utf8'))
           fs.writeFileSync('task13.txt', "dhyey patel");
          }
          catch (err) {
            console.log("Error: ", err);
          }
        })


}catch(err){
    console.log(err)

}


// 7 — Read, write, and execute
// 6 — Read and write
// 5 — Read and execute
// 4 — Read-only
// 3 — Write and execute
// 2 — Write-only
// 1 — Execute only
// 0 — No permission
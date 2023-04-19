const fs = require('fs')

  
try {
  fs.chmod("file.txt", 0o200, () => {
 
  console.log(fs.readFileSync("file.txt", 'utf8'))
   fs.writeFileSync('file.txt', "dhyey");
   console.log(fs.readFileSync("file.txt", 'utf8'))

  })
  }
  catch (err) {
    console.log("Error", err);
  }


// 7 — Read, write, and execute
// 6 — Read and write
// 5 — Read and execute
// 4 — Read-only
// 3 — Write and execute
// 2 — Write-only
// 1 — Execute only
// 0 — No permission

const fs = require('fs');

const prompt = require('prompt-sync')();
const oldFileName = prompt("Enter file name: ");
const newFileName = prompt("Enter the new file name: ")

try {
  fs.rename(oldFileName, newFileName, () => {
   
    console.log('File renamed successfully');
  });
} catch (err) {
  console.error(err);
}


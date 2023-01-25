const fs = require("fs");

(function () {
//   const fileContent = fs.readFileSync("./index.txt");

//   console.log(fileContent);//Should print whatever is put into the file
// })();
fs.readdir("./", function(err, content) {
  if(err){
    throw err;
  } else {
    content.forEach(fileOrFolder => {
      const splitName = fileOrFolder.split(".");

      if(splitName.length >= 2){
        console.log("This is a file");
      }else{
        const folderContents = fs.readdirSync(fileOrFolder);
        console.log(folderContents);
      }
    })
  }
})
})();
//For the next one, let's open a folder and read all it's files and the file's contents;

const fs = require("fs");

let opr = process.argv[2];
let name = process.argv[3];

const write = () => {
  let data = process.argv[4];
  fs.writeFile(name, data, (err) => {
    if (err) throw err;
    console.log(`${name} file is created.`);
  });
};

if(opr=="write"){
    write()
}

const read = () => {
  fs.readFile(name, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

const rename = () => {
  fs.rename(name, "newFile.txt", (err) => {
    if (err) throw err;
    console.log("Rename complete!");
  });
};

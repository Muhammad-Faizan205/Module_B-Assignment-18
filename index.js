const fs = require("fs");



// ******** Async task ********* 
fs.writeFile("text.txt", "Muhammad faizan", () => {

});


// ********* Sync task **********
fs.writeFileSync("text.txt", "Muhammad faisal");


// ********** Sync task ***********
const res = fs.readFileSync("text.txt", "utf-8");
fs.readFile("text.txt", "utf-8", (res) => {
    console.log(res);
});


fs.mkdirSync("new-folder");
fs.writeFileSync("new-folder/text.txt", "Navbar");

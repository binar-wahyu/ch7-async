const fs = require("fs-extra");

function main() {
  fs.outputFile("tugas/contoh.txt", "Ini dibuat pakai Promise")
    .then(() => {
      return fs.copy("tugas/contoh.txt", "tugas/backup.txt");
    })
    .then(() => {
      return fs.appendFile("tugas/backup.txt", "\nIni file backup");
    })
    .then(() => {
      return fs.readFile("tugas/backup.txt", "utf8");
    })
    .then((data) => {
      console.log(data);
    });
}

main();

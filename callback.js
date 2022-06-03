const fs = require("fs-extra");

function main() {
  fs.outputFile("tugas/contoh.txt", "Ini dibuat pakai callback", () => {
    fs.copy("tugas/contoh.txt", "tugas/backup.txt", () => {
      fs.appendFile("tugas/backup.txt", "\nIni file backup", () => {
        fs.readFile("tugas/backup.txt", "utf8", (err, data) => {
          console.log(data);
        });
      });
    });
  });
}

main();

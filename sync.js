const fs = require("fs-extra");

function main() {
  fs.outputFileSync("tugas/contoh.txt", "Ini dibuat pakai sync");
  fs.copySync("tugas/contoh.txt", "tugas/backup.txt");
  fs.appendFileSync("tugas/backup.txt", "\nIni file backup");

  const data = fs.readFileSync("tugas/backup.txt", "utf8");
  console.log(data);
}

main();

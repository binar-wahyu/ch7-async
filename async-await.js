const fs = require("fs-extra");

async function main() {
  await fs.outputFile("tugas/contoh.txt", "Ini dibuat pakai Async Await");
  await fs.copy("tugas/contoh.txt", "tugas/backup.txt");
  await fs.appendFile("tugas/backup.txt", "\nIni file backup");

  const data = await fs.readFile("tugas/backup.txt", "utf8");
  console.log(data);
}

main();

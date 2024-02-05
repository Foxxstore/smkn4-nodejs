//import seblak form "os";
import readline from "readline";

//console.log(seblak.cpus());

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  input.question(`ngaran maneh saha?`, name => {
    console.log(`Halo ${name}!`);
    input.close();
  });
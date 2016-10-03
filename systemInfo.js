const os = require('os');


console.log("CPU architecture:", os.arch());
console.log('');
// console.log("Constants:", os.constants);

console.log("CPU cores:", os.cpus());
console.log('');

console.log("endianness:", os.endianness());
console.log('');

console.log("free memory:", (os.freemem() / 1000000000), "GB");
console.log('');

console.log("home directory:", os.homedir());
console.log('');

console.log("This computer: ", os.hostname());
console.log('');

let loadAverage = os.loadavg();
console.log(
  "Load Average:", "\n",
  "1 minute:", loadAverage[0], "\n",
  "5 minute:", loadAverage[1], "\n",
  "15 minute:", loadAverage[2], "\n"
)

console.log("platform:", os.platform(), "\n");

console.log("OS release", os.release(), "\n");

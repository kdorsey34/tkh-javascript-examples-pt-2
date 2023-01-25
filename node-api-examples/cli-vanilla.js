const arg = process.argv[2];
//process has different properties attached to it and also methods

console.log(arg);
console.log(`Hello ${arg}`);
switch (arg) {
  case "-b":
    console.log(process.argv[3]);
    process.exit();
  default:
    console.log("Flag unknown");
    process.exit();
}

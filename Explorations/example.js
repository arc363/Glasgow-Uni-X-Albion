process.argv.forEach((value, index) => {
  console.log(index, value);
});

// from digital ocean.com

// using argument vectors
// argument vector is an array available from process.argv in node.js script
// array contains everything that's passed to script, including .exe and path/filename

if (process.argv.length === 2) {
in the absence of an argument count
  console.error(`Expected at least one argument!`);
  process.exit(1);
}

// using argument flags
// script checks for specific item at index 2 - if present, alters the output

if (process.argv[2] && process.argv[2] === `-f`) {
  console.log(`Flag is present`);
} else {
  console.log(`Flag is not present`);
}

// can flag the actual value that's been passed to the script
const custom = process.argv[2] || `Default`;
console.log(`Custom`, custom);

// using multiple arguments with values

// check to see if the -f argument is present
const flag =
  process.argv.indexOf(`-f`) > -1 ? `Flag is present.` : `Flag is not present.`;

// check for --custom and if it has a value
const customIndex = process.argv.indexOf(`--custom`);
let customValue;

if (customIndex > -1) {
  // retrieve the value after --custom
  customValue = process.argv[customIndex + 1];
}

const custom = customValue || `Default`;

console.log(`Flag:`, `${flag}`);
console.log(`Custom:`, `${custom}`);

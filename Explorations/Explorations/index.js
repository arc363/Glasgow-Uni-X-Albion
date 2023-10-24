// from sentry.io

process.argv.forEach((value, index) => {
  console.log(index, value);
});

const arguments = process.argv.slice(2);
arguments.forEach((value, index) => {
  console.log(index, value);
});

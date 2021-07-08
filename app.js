//npm - global command, comes with node
// npm -- version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the rootCertificates, creat properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const { flattenDeep } = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = flattenDeep(items);
console.log(newItems);
console.log("hello again");

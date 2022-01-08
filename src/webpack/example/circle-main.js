console.log('main starting');
const a = require('./circle-a.js');
const b = require('./circle-b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
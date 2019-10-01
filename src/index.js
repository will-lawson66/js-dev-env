import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// these are back-ticks (ES6 template string)
console.log(`I would pay ${courseValue} for this awesome course!`);
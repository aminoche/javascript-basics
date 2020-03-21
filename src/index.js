import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const flavor = 'yum';
console.log(String.prototype);
console.log('Pizza'.fontcolor('yellow'));
console.log('Pizza is "good"!');
console.log(`Pizza is "${flavor.toUpperCase()}"`);
console.log(String(55 + 11), String(55 + '11'));
console.log(String({ name: 'Pepperoni' }));
console.log(String([1, 2, 3, 4]));
console.log(new String(55).valueOf());

const immutableString = 'I shall not change!';
const upperCaseString = immutableString.toUpperCase();

console.log(immutableString, upperCaseString);

console.log(Object.prototype.toString.call('a'));

console.log('abc'.padEnd(10, '-'));

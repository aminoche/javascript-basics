import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(0.1 + 0.2);

const price = 99.33 * 100;
const quantity = 3;

console.log((price * quantity) / 100);

console.log(parseInt('55px', 10)); //parse a whole number
console.log(parseFloat('55.999999px')); //parse a float

console.log(Number('55e10'));
console.log(Number('55px'));
console.log(+'99.5555'); //convert to a number

import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const drinks = [
  ['Lemonade', 99],
  ['Lime', 79],
  ['Peach', 89]
];

const [one, [, b], ...rest] = drinks;

console.log(one, b, rest);

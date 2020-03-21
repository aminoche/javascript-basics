import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log(true, false);
console.log(typeof false);
console.log(true instanceof Boolean);
console.log(new Boolean('X') instanceof Boolean);
console.log(Object.prototype.toString.call(true).slice(8, -1));

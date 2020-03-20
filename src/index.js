import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const condition = true;

if (condition) {
  console.log('Yes');
} else {
  console.log('No');
}

const number = 98;
let result; // undefined

// if (number === 1) {
//   result = 'One';
// } else if (number === 99) {
//   result = 'Ninety-Nine';
// } else if (number === 1000) {
//   result = 'One Thousand';
// } else {
//   result = 'No Match';
// }

switch (number) {
  case 1:
    result = 'One';
    break;
  case 99:
    result = 'Ninety-nine';
    break;
  case 1000:
    result = 'One Thousand';
    break;
  default:
    result = 'N/A';
    break;
}

console.log(result);

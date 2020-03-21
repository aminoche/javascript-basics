import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

console.log(makeCar);
console.log(makeCarExpression);
console.log(makeCarArrow);
console.log(makeCarArrowShorthand);

//1: Function declaration -- hoisted
function makeCar() {
  console.log('Making a car...');
}

makeCar();

//2: Function expression (anonymous or named) -- not hoisted
const makeCarExpression = function myFunction() {};
console.log(makeCarExpression.name);

//3: Arrow function

const makeCarArrow = () => {
  console.log('Making car inside Arrow...');
};

makeCarArrow();

const makeCarArrowShorthand = () => console.log('Short');
makeCarArrowShorthand();

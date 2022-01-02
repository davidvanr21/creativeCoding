console.log('Lets write some awesome code')

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'blue';
// context.fillRect(100, 100, 400, 400);

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);
// context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
// context.stroke();

for (let i = 0; i < 5; i++){
    context.beginPath();
    context.rect(100 + 80 * i, 100, 60, 60);
    context.stroke();
}


let year = 2022;
let nextyear = year + 1;

let dinner = "salad";
let sentence = "tonight dinner will be" + dinner;

function saySomething(param){
    console.log(param);
}

saySomething('sentence');

function add(a, b){
    return a + b;
}

let result = add(5, 7);
console.log(result);

let multiply = (a, b) => {
   return a * b;
}

console.log(multiply(4, 5))

let years = [];
let menu = ['starter', 'main', 'dessert' ,'drinks'];

for (let i = 0; i < menu.length; i ++) {
    console.log(menu[i]);
}

for (let i = 0; i < 10; i ++) {
    years.push(2042 + i);
}

console.log(years);
// js-projects
// get id for button and parent div
document.getElementById('btn').addEventListener('click', mathoperation);
let pdiv = document.getElementsByClassName('problems')[0];
let resetbtn=document.getElementById('reset-btn');

function mathoperation() {
    // element & value get
    let operator = document.getElementById('operators').value;
    let range = document.getElementById('range').value;

    // reset fn call
    reset();

    // looping
    for (i = 1; i <= 16; i++) {
        // 2 random number for math operation
        let num1 = randomnumber(range);
        let num2 = randomnumber(range);
        console.log(num1, num2);

        // reset button fn call
        datareset();

        // function call
        update(num1, num2, operator);
    }
}

// random number generate
function randomnumber(range) {
    return parseInt(Math.random() * range);
}

// update function into html
function update(number1, number2, ops) {
    let div = document.createElement('div');
    div.setAttribute('div','problem');

    let n1 = document.createElement('h3');
    n1.innerText = number1;

    let op = document.createElement('h3');
    op.innerText = texttosymbol(ops);

    let n2 = document.createElement('h3');
    n2.innerText = number2;

    let ip = document.createElement('input');
    ip.setAttribute('type','text');
    ip.setAttribute('input','ans');

    // append 
    div.append(n1);
    div.append(op);
    div.append(n2);
    div.append(ip);

    // parent div append
    pdiv.append(div);
}

// text to symbol
function texttosymbol(text) {
    // switch to mathematical operation
    switch (text) {
        case '+':
            return '+';
        case '-':
            return '-';
        case '*':
            return '*';
        default:
            return '/';
    }
}

// reset function
function reset(){
    pdiv.innerHTML="";
}

// reset button function
function datareset(){
    resetbtn.removeAttribute('disabled');
}
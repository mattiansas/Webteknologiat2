function init() {

}


// Generate random numbers when the page loads
window.onload = function () {
    document.getElementById('number1').value = getRandomNumber();
    document.getElementById('number2').value = getRandomNumber();
    alert('calculate function called');
};

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
}

// Increment function
function increment(id) {
    const element = document.getElementById(id);
    let value = parseInt(element.value);
    if (value < 10) {
        element.value = value + 1;
    }
}

// Decrement function
function decrement(id) {
    const element = document.getElementById(id);
    let value = parseInt(element.value);
    if (value > 1) {
        element.value = value - 1;
    }
}

// Calculate function
function calculate() {
    alert('calculate function called');
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;

    let result;
    switch (operator) {
        case '*':
            result = number1 * number2;
            break;
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = 'Virhe';
    }

    document.getElementById('result').innerText = `Tulos: ${result}`;
}

let calculations = []; // Array to store calculation history

window.onload = function () {
    document.getElementById('number1').value = getRandomNumber();
    document.getElementById('number2').value = getRandomNumber();
};

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function increment(id) {
    const element = document.getElementById(id);
    let value = parseInt(element.value);
    if (value < 10) {
        element.value = value + 1;
    }
}

function decrement(id) {
    const element = document.getElementById(id);
    let value = parseInt(element.value);
    if (value > 1) {
        element.value = value - 1;
    }
}

function calculate() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;

    let result;
    switch (operator) {
        case '*':
            result = number1 * number2;
            break;
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = 'Virhe';
    }

    // Show the result
    document.getElementById('result').innerText = `Tulos: ${result}`;

    // Add to history
    const calculation = `${number1} ${operator} ${number2} = ${result}`;
    calculations.push(calculation);

    // Display history
    displayHistory();
}

function displayHistory() {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = ''; // Clear previous history
    calculations.forEach(calc => {
        const listItem = document.createElement('div');
        listItem.innerText = calc;
        historyElement.appendChild(listItem);
    });
}
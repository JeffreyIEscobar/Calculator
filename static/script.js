// Function to add a digit or operator to the display
function addToDisplay(value) {
    // Replace symbols for division and multiplication
    if (value === '/') {
        value = '÷'; // Replace '/' with '÷'
    } else if (value === '×') {
        value = '*'; // Replace '×' with '*'
    }
    
    // Replace '÷' with '/' before adding to the display
    const display = document.getElementById('display');
    display.value += value === '÷' ? '/' : value;
}


// Function to calculate the result based on the user input
function calculate() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);

        document.getElementById('result').textContent = result;
    } catch (error) {
        // Handle any errors (e.g., division by zero) and display an error message
        document.getElementById('result').textContent = 'Error';
    }
}
// Function to square the displayed number
function square() {
    const expression = document.getElementById('display').value;
    let number = eval(expression);

    const result = Math.pow(number, 2);
    document.getElementById('result').textContent = result;
}

// Function to cube the displayed number
function cube() {
    const expression = document.getElementById('display').value;
    let number = eval(expression);

    const result = Math.pow(number, 3);
    document.getElementById('result').textContent = result;
}

// Function to calculate the square root of the displayed number
function calculateSquareRoot() {
    const expression = document.getElementById('display').value;
    let number = eval(expression);

    if (number >= 0) {
        // Calculate the square root if the number is non-negative
        number = Math.sqrt(number);
        document.getElementById('display').value = number;
        document.getElementById('result').textContent = number;
    } else {
        // Display an error message for negative input
        document.getElementById('result').textContent = 'Invalid Input';
    }
}

// Clear the display and result
function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').textContent = '';
}

const display = document.getElementById('display');

function displayValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = Function('return ' + display.value)();
        display.value = String(result);
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '';
        }, 1000);
    }
}

function percent() {
    const value = parseFloat(display.value);
    if (!Number.isNaN(value)) {
        display.value = String(value / 100);
    }
}

function plusMinus() {
    if (!display.value) return;
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}
 
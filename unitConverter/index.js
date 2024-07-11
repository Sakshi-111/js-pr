function convert() {
    const inputValue = document.getElementById('inputValue').value;
    const unitType = document.getElementById('unitType').value;
    const resultElement = document.getElementById('result');
    if (inputValue === ' ') {
        resultElement.textContent = 'Please enter a value.';
        return;
    }
    let result;
    if (unitType === 'kmToMiles') {
        result = (inputValue * 0.621371).toFixed(2) + ' Miles';
    } else if (unitType === 'milesToKm') {
        result = (inputValue / 0.621371).toFixed(2) + ' Kilometers';
    }
    resultElement.textContent = `Result:${result}`;
}
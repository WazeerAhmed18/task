document.getElementById('numberInput').addEventListener('input', function() {
    const inputValue = this.value;
    const messageElement = document.getElementById('message');
    const resultElement = document.getElementById('result');
    
    // Clear previous results and message
    resultElement.innerHTML = '';
    messageElement.textContent = '';

    // Validate if the input is a number
    if (!/^-?\d*$/.test(inputValue)) {
        messageElement.textContent = 'Please enter a valid number';
        return;
    }

    const num = parseInt(inputValue, 10);

    if (num < 0) {
        messageElement.textContent = 'Enter a positive value';
    } else {
        const result = [];
        if (num % 2 === 0) {
            result.push(num + 2, num + 4, num + 6);
        } else {
            result.push(num + 2, num + 4, num + 6);
        }

        result.forEach((number) => {
            const listItem = document.createElement('li');
            listItem.textContent = number;
            resultElement.appendChild(listItem);
        });
    }
});
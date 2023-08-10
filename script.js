document.addEventListener('DOMContentLoaded', function () {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;

            if (buttonText === 'C') {
                currentInput = '';
            } else if (buttonText === '=') {
                try {
                    currentInput = eval(currentInput);
                } catch (error) {
                    currentInput = 'Error';
                }
            } else {
                currentInput += buttonText;
            }

            resultInput.value = currentInput;
        });
    });
});
let isDarkMode = false;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
    clearError();
}

function clearDisplay() {
    document.getElementById('display').value = '';
    clearError();
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.value !== '') {
        if (display.value.charAt(0) === '-') {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }
    clearError();
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    clearError();
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Menangani persentase
        let result = display.value.replace('%', '/100');
        let calculated = eval(result);
        
        // Memeriksa apakah hasilnya terlalu besar dan mengubah ke notasi ilmiah
        if (Math.abs(calculated) >= 1e6 || Math.abs(calculated) <= 1e-6) {
            display.value = calculated.toExponential(3);
        } else {
            display.value = calculated;
        }
        clearError();
    } catch (error) {
        display.value = '';
        showError("Terjadi kesalahan dalam perhitungan. Pastikan ekspresi Anda benar.");
    }
}

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}

function clearError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const calculator = document.getElementById('calculator');
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const themeToggle = document.querySelector('.theme-toggle button');
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        calculator.classList.add('dark-mode');
        display.classList.add('dark-mode');
        buttons.forEach(button => button.classList.add('dark-mode'));
        themeToggle.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        calculator.classList.remove('dark-mode');
        display.classList.remove('dark-mode');
        buttons.forEach(button => button.classList.remove('dark-mode'));
        themeToggle.classList.remove('dark-mode');
    }
}

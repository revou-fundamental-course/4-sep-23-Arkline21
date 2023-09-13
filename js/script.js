const vField = document.getElementById('iField');
const stateLuas = document.getElementById('bLuas');
const stateReset = document.getElementById('bReset');
const stateKeliling = document.getElementById('bKeliling');
const vOutField = document.getElementsByClassName('CalcResult');

function CalcLuas() {
    var sisi = vField.value;
    var rLuas = sisi * sisi;
    vOutField.textContent = 'Luas Persegi =' + rLuas;
}

function CalcKeliling() {
    var sisi = vField.value;
    var rKeliling = sisi * 4;
    vOutField.textContent = 'Luas Persegi =' + rKeliling;
}

function CalcReset() {
    vField.value = '';
    vOutField.textContent = '';
}

stateLuas.addEventListener('click', CalcLuas() )
stateKeliling.addEventListener('click', CalcKeliling () )
stateReset.addEventListener('click', CalcReset() )
function CalcLuas() {
    const sisi = parseFloat(document.getElementsByClassName('InputField').value);
    const luas = sisi * sisi;
    document.getElementsByClassName('CalcResult').textContent = "Luas Persegi: " + luas;
}

function CalcKeliling() {
    const sisi = parseFloat(document.getElementsByClassName('InputField').value);
    const keliling = 4 * sisi;
    document.getElementsByClassName('CalcResult').textContent = "Keliling Persegi: " + keliling;
}

function CalcReset(){
    document.getElementsByClassName('InputField').value = '';
    document.getElementsByClassName('CalcResult').textContent = "";
}

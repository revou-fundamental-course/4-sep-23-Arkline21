const iField = document.getElementById('iField')
const sLuas = document.getElementById('bLuas')
const sReset = document.getElementById('bReset')
const sKeliling = document.getElementById('bKeliling')
const oField = document.getElementById('oField')
var sisi = ""

iField.addEventListener('input', function() {
    var IValue = iField.value.trim()
    console.log(IValue)
})

function CalcLuas() {
    sisi = iField.value.trim()
    var rLuas = sisi * sisi
    oField.textContent = 'Luas Persegi = ' + rLuas
    console.log(oField.textContent)
}

function CalcKeliling() {
    sisi = iField.value.trim()
    var rKeliling = sisi * 4
    oField.textContent = 'Keliling Persegi = ' + rKeliling
    console.log(oField.textContent)
}

function CalcReset() {
    iField.value = ''
    oField.textContent = ''
    console.log('all Field Reset')
}
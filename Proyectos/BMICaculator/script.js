document.getElementById("bmiForm").addEventListener('submit', function(e){
    e.preventDefault();
    const gender = document.getElementById('gender').value
    const age = parseInt(document.getElementById('age').value)
    const height = parseInt(document.getElementById('height').value)
    const weight = parseFloat(document.getElementById('weight').value)

    if (gender && age && height && weight) {
        const imc = weight / ( height * height )
        const result = document.getElementById('result')
        let category = ''
        if (imc < 18.5) {
            category = 'Bajo de peso'
        }else if (imc >= 18.5 && imc <24.9){
            category = 'Peso normal'
        }else if (imc >= 25 && imc <29.9) {
            category = 'Con sobrepeso'
        }else {
            category = "Obeso"
        }
        
        let resultMassege = 'Su IMC es: ' + imc.toFixed(2) + '<br>'
        resultMassege += 'Categoria: ' + category
        result.innerHTML = resultMassege
        console.log(resultMassege);
    }
})
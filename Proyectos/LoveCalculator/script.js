function calculateLove() {
    /* console.log('Hola mundo'); */
    const name1 = document.getElementById('name1').value.trim()
    const name2 = document.getElementById('name2').value.trim()
   if (name1 === "" || name2 === "") {
    alert("Ingresa los nombres")
   }else {
    const lovePercentage = Math.floor(Math.random() * 101)
    const result = document.getElementById("result")
    /* result.innerHTML = "Felicidades " + lovePercentage + "%" */
    result.innerHTML = `${name1} y ${name2} su porcentaje de amor es: ${lovePercentage}%`
    if (lovePercentage <30) {
        result.innerHTML = result.innerHTML + "<br> No eres compatible, vuelve a intentar" 
    }else if (lovePercentage>=30 && lovePercentage< 70){
    result.innerHTML = result.innerHTML + "<br> Eres poco compatible"  
    }else{
    result.innerHTML = result.innerHTML + "<br> Felicidades eres compatible"
    }
   }
}
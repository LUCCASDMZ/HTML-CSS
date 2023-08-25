function somar(){
    const numero = parseInt(document.getElementById(`numero`).value)
    const soma = numero * 5
    const resultado = document.getElementById(`res`)

resultado.innerHTML = soma

}



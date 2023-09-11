function somar(){
    const numero1 = parseInt(document.getElementById('n1').value)
    const numero2 = parseInt(document.getElementById('n2').value)
    
    const soma = numero1 + numero2

    document.getElementById('soma').innerHTML = `O resultado é ${soma}`

}
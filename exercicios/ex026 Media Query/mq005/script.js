function clickMenu(){
    const itens = document.getElementById('itens')
    if (itens.style.display == 'none') {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function mudouTamanho(){
    const itens = document.getElementById('itens')
    if (window.innerWidth >= 768){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }

}
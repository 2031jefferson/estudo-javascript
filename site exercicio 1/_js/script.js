

function carregar(){
    var img = window.document.getElementById('imagem')
    var frase = window.document.getElementById('frase')
    var titulo = window.document.getElementById('titulo')
    var date = new Date()
    var hora = date.getHours()
    img.src = '/../_imagens/noite.png'
    frase.innerHTML = `Agora são <strong>${hora}hs</strong>`
    if(hora >= 0 && hora < 12){
        img.src = './_imagens/manha.png'
        titulo.innerText = 'Bom Dia!'

        document.body.style.background = 'rgba(150, 100, 26, 0.74)'
    }else if(hora >= 12 && hora <= 18){
        img.src = './_imagens/tarde.png'
        document.body.style.background = 'rgb(14, 73, 73)'
        titulo.innerText = 'Bom Tarde'
    }else{
        img.src = './_imagens/noite.png'
        titulo.innerText = 'Boa Noite'
        document.body.style.background = 'rgb(10, 151, 161)'
    }

}
const valor1 = window.document.getElementById('txt1')
const valor2 = window.document.getElementById('txt2')
const res = window.document.getElementById('res')
addEventListener('keydown', tecla)

function soma(){
    
    var txt1 = Number(valor1.value)
    var txt2 = Number(valor2.value)
    var resu = txt1 + txt2
    valor1.style.background = 'green'
    valor2.style.background = 'red'
    valor1.style.color = 'white'
    valor2.style.color = ' white'
    window.alert(`seu resultado foi calculado ${resu}`)

    

    res.innerHTML = `O valor de ${txt1} + ${txt2} é igual a <strong>${resu}</strong>`
    



    }
    function tecla(){
        window.alert('uma tecla foi presionada ${}')
    }
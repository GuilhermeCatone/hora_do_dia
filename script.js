function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()


    if (hora >= 0 && hora < 12) {
        msg.innerHTML = (`<p>BOM DIA!</p> <p>Agora são ${hora}:${minuto} horas.</p>`)
        img.src = 'manhã.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = (`<p>BOA TARDE!</p> <p>Agora são ${hora}:${minuto}horas.</p>`)
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = (`<p>BOA NOITE!</p> <p>Agora são ${hora}:${minuto}horas.</p>`)
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}
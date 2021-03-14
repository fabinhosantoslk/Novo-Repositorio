function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        img.src = 'FManha.png'
        document.body.style.background = '#fdd97f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'FTarde.png'
        document.body.style.background = '#9472a4'
    } else {
        img.src = 'FNoite.png'
        document.body.style.background = '#1c2a47'
    }

}
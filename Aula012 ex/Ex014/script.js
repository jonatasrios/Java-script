function caregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora= data.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src='imagemmanha.jpg'
        document.body.style.background = '#948c7aff'
    }
    else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imagemtarde.jpg'
        document.body.style.background = "#ce6c46ff"
        
    }
    else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = "#454557ff"
    }
}

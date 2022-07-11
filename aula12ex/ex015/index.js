function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formulano = document.getElementById('txtano')
    var outcome = document.querySelector('div#outcome')
    if (formulano.value.length == 0 || formulano.value > ano) {
        window.alert('[ERRO] Informe um ano válido e tente novamente!')
    } else {
        var formulgenero = document.getElementsByName('genero')
        var idade = ano - Number(formulano.value)
        var generoCheck = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formulgenero[0].checked) {
            generoCheck = 'um homem' 
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else if (idade < 200) {
                //idoso
                img.setAttribute('src', 'idoso.png')
            } else {
                //falecido
                img.setAttribute('src', 'lapide.png')
            }
        } else if (formulgenero[1].checked) {
            generoCheck = 'uma mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 200) {
                //idoso
                img.setAttribute('src', 'idosa.png')
            } else {
                //falecido
                img.setAttribute('src', 'lapide.png')
            }
        } 
        outcome.innerHTML = `Detectamos ${generoCheck} de ${idade} anos!`
        outcome.appendChild(img)
    }
}
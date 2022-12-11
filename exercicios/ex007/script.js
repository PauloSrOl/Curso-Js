function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 ||  fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente  novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
               //criança
               img.setAttribute('src','fotomenino.png ')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src','fotorapaz.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src','fotohomem.png')
            }else{
                //idoso
                img.setAttribute('src','fotoidoso.png')
            }
        
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotomenina.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'fotomoca.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'fotomulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML  = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild (img)
        
    }

}
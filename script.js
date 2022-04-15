/* Configurações de tela */

var altura = 0
var largura = 0
var perdeuVida = 1
var tempo = 15

var criaMosquitoTempo = 1500

function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight //altura da tela
    largura = window.innerWidth //largura da tela
    console.log(largura, altura)
}

ajustarTamanhoPalcoJogo()

/* ********************* */
/* Dificuldade */

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500

} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000

} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750
}

/* ********************* */

/* TEMPO */

var cronometro = setInterval( function(){
    
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro) //pra dar stop no interval
        clearInterval(criaMosquito) //pra dar stop nos mosquitos
        window.location.href = 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo //innerHTML é o conteúdo dentro do objeto, ex: span>(innerHTML)</span
    }

} ,1000)

/* ****** */

/* Posição dos mosquitos */
function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        //console.log('elemento selecionado foi: v ' + vidas)
        if (perdeuVida > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            
        document.getElementById('v' + perdeuVida++).src = "Imagens/imagens/coracao_vazio.png" 

        /*
        var a=0;
        console.log(a++) //Imprime 0

        var b=0;
        console.log(++b) //Imprime 1
        */

       //perdeuVida++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90 //número aleatorio baseado na altura ( * altura)
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0  ? 0 : posicaoX //isso se chama controle, se lêr assim essa linha: se posiçãoX menor que 0 (se for = '?') então 0 (senão = ':') posicaoX 
    posicaoY = posicaoY < 0  ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criando o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'Imagens/imagens/mosca.png'
    mosquito.className = tamanhoMosquitoAleatorio() + ' ' + ladoAleatorio()//foi botado um espaço ali, pois se não tivesse iria ficar algo do tipo: mosquito1ladoA, dai não funcionaria
    mosquito.style.left = posicaoX += 'px'
    mosquito.style.top = posicaoY += 'px'
    mosquito.style.position += 'absolute'
    mosquito.id = 'mosquito' //id único
    mosquito.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(mosquito)//acessar o body da nossa página e incluir a nossa imagem dentro do body da nossa página utilizando o metódo appendChild, adicionando um filho ao body. e dentro das aspas você poe o elemento que você quer pôr, no caso ''var mosquito = document.createElement('img')
}

/* ********************* */

/*  Tamanho dos mosquitos */
function tamanhoMosquitoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

/* ********************* */

/*  Lado dos mosquitos */
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

/* ********************* */
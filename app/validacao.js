function verificaSeOChutePossuiValorValido(chute){
    const numero =+ chute

    if(chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = `
                <h2 class="game-over">GAME OVER</h2>
                <button id="jogar-novamente" class="btn-jogar" style.background="black">Jogar Novamente</button>
            `
            document.body.style.background="black" 
        
        } else elementoChute.innerHTML += '<div>Chute inválido</div>'
    }
    

    if(numeroForMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Chute inválido. O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML += `<h2>Você acertou, parabéns!!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

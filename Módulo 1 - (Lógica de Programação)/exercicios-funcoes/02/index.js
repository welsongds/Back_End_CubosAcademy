const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === false) {
            this.ligado = true
            this.mensagem()
        } else {
            console.log("Este carro já está ligado.")
        }
    },
    desligar: function () {
        if (this.ligado === true && this.velocidade === 0) {
            this.ligado = false
            this.mensagem()
        } else if (this.ligado === false) {
            console.log("Este carro já está desligado.")
        } else {
            console.log("Tente desacelerar para desligar o carro")
        }
    },
    acelerar: function () {
        if (this.ligado === false) {
            this.ligado = true
            this.mensagem()
        } else if (this.ligado === true) {
            this.velocidade += 10
            this.mensagem()
        } else {
            console.log("Não é possível acelerar um carro desligado")
        }
    },
    desacelerar: function () {
        if (this.ligado === true && this.velocidade > 0) {
            this.velocidade -= 10
            if (this.velocidade === 0) {
                this.ligado = false
            }
            this.mensagem()
        } else {
            console.log("Não é possível desacelerar um carro desligado")
        }
    },
    mensagem: function () {
        if (this.ligado === true) {
            console.log(`Carro ligado, velocidade: ${this.velocidade}.`)
        } else {
            console.log(`Carro desligado, velocidade: ${this.velocidade}`)
        }
    }

}
//carro.desligar()
//carro.ligar()
//carro.ligar()
//carro.acelerar()
//carro.acelerar()
//carro.desacelerar()
//carro.desligar()
//carro.desacelerar()
//carro.desligar()
//carro.acelerar()
//carro.desacelerar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
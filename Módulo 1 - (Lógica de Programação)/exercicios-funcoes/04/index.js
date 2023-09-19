const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    históricos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.históricos.push({ tipo: "Depósito", valor: valor })
        console.log(`Deposito de R$${(valor / 100).toFixed(2)} realizado com para o cliente: ${this.nome}`)
    },
    sacar: function (valor) {
        if (this.saldo > valor) {
            this.saldo -= valor
            this.históricos.push({ tipo: "Saque", valor: valor })
            console.log(`Saque de R$${(valor / 100).toFixed(2)} realizado com para o cliente: ${this.nome}`)

        } else {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}`)
        console.log("Histórico:")
        for (let transacao of this.históricos) {
            console.log(`${transacao.tipo} de R$${transacao.valor / 100}`)
        }
    }
}
contaBancaria.depositar(10000)
contaBancaria.sacar(50000)
contaBancaria.sacar(5000)
contaBancaria.extrato()
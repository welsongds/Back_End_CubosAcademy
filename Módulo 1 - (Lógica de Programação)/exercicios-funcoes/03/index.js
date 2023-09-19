const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 2000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total dos produtos: R$${(this.calcularTotalAPagar()).toFixed(2)}`)
        console.log(`O valor do desconto: R$${this.calcularDesconto()}`)
        console.log(`Total a pagar: R$${this.calcularTotalAPagar() - this.calcularDesconto()}`)
    },
    addProduto: function (produto) {
        this.produtos.push(produto)
    },
    imprimirDetalhes: function () {
        for (let produto of this.produtos) {
            console.log(`Item ${produto.id} - ${produto.nome} - ${produto.qtd} und - R$${((produto.precoUnit * produto.qtd) / 100).toFixed(2)}`)
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total dos produtos: R$${(this.calcularTotalAPagar()).toFixed(2)}`)
        console.log(`O valor do desconto: R$${this.calcularDesconto()}`)
        console.log(`Total a pagar: R$${this.calcularTotalAPagar() - this.calcularDesconto()}`)
    },
    calcularTotalDeItens: function () {
        let quantidadeProdutos = 0;
        for (let produto of this.produtos) {
            quantidadeProdutos += produto.qtd
        }
        return quantidadeProdutos
    },
    calcularTotalAPagar: function () {
        let totalCompra = 0;
        for (let produto of this.produtos) {
            totalCompra += produto.precoUnit * produto.qtd
        }
        totalCompra = totalCompra / 100
        return totalCompra
    },
    calcularDesconto: function () {
        let desconto1 = 0
        let desconto2 = 0
        let desconto = 0
        if (this.calcularTotalDeItens() > 4) {
            desconto1 = this.produtos[0].precoUnit
            for (let prod of this.produtos) {
                if (prod.precoUnit < desconto1) {
                    desconto1 = prod.precoUnit
                }
            }
            desconto1 = desconto1 / 100
        }
        if (this.calcularTotalAPagar() > 100) {
            desconto2 = this.calcularTotalAPagar() * 0.1
        }
        if (desconto1 > desconto2) {
            desconto = desconto1
        } else {
            desconto = desconto2
        }

        return desconto
    }
}
carrinho.imprimirDetalhes()
//carrinho.imprimirResumo()
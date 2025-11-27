class Pedido {
    constructor(itens) {
        this.itens = itens;
        this.total = 0;
    }

    calcularTotal() {
        this.total = this.itens.reduce((soma, item) =>
            soma + item.preco * item.quantidade, 0);
    }

    salvar() {
        console.log(`Pedido salvo! Total = R$ ${this.total.toFixed(2)}`);
    }
}

class PedidoController {
    criarPedido(dadosPedido) {
        const pedido = new Pedido(dadosPedido);
        pedido.calcularTotal();
        pedido.salvar();
        return pedido;
    }
}

const controller = new PedidoController();

const itens = [
    { preco: 50.0, quantidade: 2 },
    { preco: 30.0, quantidade: 1 }
];

const pedido = controller.criarPedido(itens);

console.log("Pedido criado com sucesso!");
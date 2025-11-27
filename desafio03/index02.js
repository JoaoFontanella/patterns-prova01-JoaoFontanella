class Cliente {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
}

class RegraDesconto {
    calcular(cliente) {
        return 0; // sem desconto
    }
}

class DescontoVip extends RegraDesconto {
    calcular(cliente) {
        return cliente.tipo === "vip" ? 0.20 : 0;
    }
}

class DescontoRegular extends RegraDesconto {
    calcular(cliente) {
        return cliente.tipo === "regular" ? 0.10 : 0;
    }
}

class CalculadoraDesconto {
    constructor(regras) {
        this.regras = regras;
    }

    calcularDesconto(cliente) {
        for (let regra of this.regras) {
            const valor = regra.calcular(cliente);
            if (valor > 0) return valor;
        }
        return 0;
    }
}

const cliente = new Cliente("João", "vip");

const regras = [
    new DescontoVip(),
    new DescontoRegular()
];

const calculadora = new CalculadoraDesconto(regras);

console.log(`Desconto aplicado: ${calculadora.calcularDesconto(cliente) * 100}%`);
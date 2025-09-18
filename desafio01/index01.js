class Lanche {
    constructor() {
        this.pao = null;
        this.carne = null;
        this.queijo = null;
        this.salada = null;
        this.molho = null;
    }

    show() {
        console.log("Lanche:", {
            pao: this.pao,
            carne: this.carne,
            queijo: this.queijo,
            salada: this.salada,
            molho: this.molho,
        });
    }
}

// Builder
class LancheBuilder {
    constructor() {
        this.lanche = new Lanche();
    }

    setPao(pao) {
        this.lanche.pao = pao;
        return this;
    }

    setCarne(carne) {
        this.lanche.carne = carne;
        return this;
    }

    setQueijo(queijo) {
        this.lanche.queijo = queijo;
        return this;
    }

    setSalada(salada) {
        this.lanche.salada = salada;
        return this;
    }

    setMolho(molho) {
        this.lanche.molho = molho;
        return this;
    }

    build() {
        return this.lanche;
    }
}

// Director → Pao pré-definido
class LancheDirector {
    static buildLancheTOP() {
      return new LancheBuilder()
        .setPao("Pão Ceverjinho")
        .setCarne("Churrasco")
        .setQueijo("Queijo prato")
        .setSalada("Tomate")
        .setMolho("BBQ")
        .build();
    }
}

const lanchepredefinido = LancheDirector.buildLancheTOP();
lanchepredefinido.show();

const lanchecustom = new LancheBuilder().setPao("Pao").setCarne("Frango").setQueijo("Chedar").setSalada("Alface").setMolho("Mostarda").build();
lanchecustom.show();

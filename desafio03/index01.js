class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class UsuarioRepository {
    salvar(usuario) {
        console.log(`Usuário ${usuario.nome} salvo no banco de dados.`);
    }
}

class EmailService {
    enviarEmailBoasVindas(usuario) {
        console.log(`E-mail de boas-vindas enviado para ${usuario.email}`);
    }
}

const repo = new UsuarioRepository();
const emailService = new EmailService();

const user = new Usuario("Maria", "maria@email.com");

repo.salvar(user);
emailService.enviarEmailBoasVindas(user);

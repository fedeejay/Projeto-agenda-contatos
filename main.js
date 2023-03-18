const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const totalContatos = document.querySelector('#total-contatos-valor');

let contatos = [];

function adicionarContato() {
const nome = document.querySelector('#nome-contato').value;
const telefone = document.querySelector('#telefone-contato').value;

  // Verifica se o contato já existe
const contatoExistente = contatos.find(contato => contato.nome === nome);
const telefoneExistente = contatos.find(contato => contato.telefone === telefone);

if (nome === '' || telefone === '') {
    alert('Por favor, preencha todos os campos antes de cadastrar um contato.');
    return;
}

if (contatoExistente) {
    alert('Esse contato já existe na agenda!');
    return;
}

if (telefoneExistente) {
    alert('Esse número já existe na agenda!');
    return;
}

  // Cria um novo objeto de contato
const contato = { nome, telefone };
contatos.push(contato);

  // Cria uma nova linha na tabela para exibir o novo contato
const newRow = document.createElement('tr');
const nomeCell = document.createElement('td');
const telefoneCell = document.createElement('td');
nomeCell.textContent = nome;
telefoneCell.textContent = telefone;
newRow.appendChild(nomeCell);
newRow.appendChild(telefoneCell);
tbody.appendChild(newRow);

  // Atualiza o total de contatos
totalContatos.textContent = contatos.length;

  // Limpa os campos do formulário
form.reset();
}

const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const totalContatos = document.querySelector('#total-contatos-valor');

let contatos = [];

function adicionarContato() {
const nome = document.querySelector('#nome-contato').value;
const telefone = document.querySelector('#telefone-contato').value;

const telefoneRegex = /^\d{4,5}-?\d{4}$/;
if (!telefoneRegex.test(telefone)) {
    alert('Por favor, insira um número de telefone válido.');
    return;
}

const telefoneNumeros = telefone.replace(/-/g, '');
if (telefoneNumeros.length < 8) {
    alert('Por favor, insira um número de telefone com pelo menos 8 dígitos.');
    return;
}

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

const contato = { nome, telefone };
contatos.push(contato);

const newRow = document.createElement('tr');
const nomeCell = document.createElement('td');
const telefoneCell = document.createElement('td');
nomeCell.textContent = nome;
telefoneCell.textContent = telefone;
newRow.appendChild(nomeCell);
newRow.appendChild(telefoneCell);
tbody.appendChild(newRow);

totalContatos.textContent = contatos.length;

form.reset();
}
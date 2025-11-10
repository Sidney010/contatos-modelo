'use strict'

import { lerContatos, criarContato, atualizarContato, deleteContato } from "./contatos.js"
console.log(await lerContatos())

async function criarCardContato() {
    const contatos = await lerContatos()
    const container = document.getElementById('container')

    contatos.forEach(contato => {

        const card = document.createElement('div')
        card.classList.add('card-contato')

        const img = document.createElement('img')
        img.src = contato.foto
        card.appendChild(img)

        const h2 = document.createElement('h2')
        h2.textContent = contato.nome
        card.appendChild(h2)

        const p = document.createElement('p')
        p.textContent = contato.celular
        card.appendChild(p)

        container.appendChild(card)

        card.addEventListener('click', function () {
            const main = document.querySelector('main')
            main.classList.replace('card-show', 'form-show')

            const inputNome = document.getElementById('nome')
            inputNome.value = contato.nome

            const inputEmail = document.getElementById('email')
            inputEmail.value = contato.email

            const inputCelular = document.getElementById('celular')
            inputCelular.value = contato.celular

            const inputEndereco = document.getElementById('endereco')
            inputEndereco.value = contato.endereco

            const inputCidade = document.getElementById('cidade')
            inputCidade.value = contato.cidade

            const campoImg = document.getElementById('foto')
            campoImg.src = contato.foto

            const buttonDelete = document.getElementById('deletar')
            buttonDelete.addEventListener('click', function () {
                const confirmacao = confirm("Tem certeza que deseja excluir o contato?");
                if (confirmacao) {
                    deleteContato(contato.id)
                    alert("Contato deletado")
                    location.reload()
                }
            })

        });




    });


}

function abrirFormulario() {
    const buttonCard = document.getElementById('novo-contato')
    buttonCard.addEventListener('click', function () {
        const main = document.querySelector('main')
        main.classList.replace('card-show', 'form-show')
        const inputNome = document.getElementById('nome')
        inputNome.value = ''

        const inputEmail = document.getElementById('email')
        inputEmail.value = ''

        const inputCelular = document.getElementById('celular')
        inputCelular.value = ''

        const inputEndereco = document.getElementById('endereco')
        inputEndereco.value = ''

        const inputCidade = document.getElementById('cidade')
        inputCidade.value = ''

        const campoImg = document.getElementById('foto')
        campoImg.files = document.getElementById('foto').addEventListener('change', preview)


    });
}
function cancelarFormulario() {
    const buttonfecharFormulario = document.getElementById('cancelar')
    buttonfecharFormulario.addEventListener('click', function () {
        const main = document.querySelector('main')
        main.classList.replace('form-show', 'card-show')
    });
}
function preview({ target }) {
    document.getElementById('preview-image').src = URL.createObjectURL(target.files[0])
}

async function enviarFormulario() {
    const inputNome = document.getElementById('nome').value
    const inputEmail = document.getElementById('email').value
    const inputCelular = document.getElementById('celular').value
    const inputEndereco = document.getElementById('endereco').value
    const inputCidade = document.getElementById('cidade').value
    const campoImg = document.getElementById('foto').src
    const novoContatos = {
        "nome": inputNome,
        "celular": inputCelular,
        "foto": campoImg,
        "email": inputEmail,
        "endereco": inputEndereco,
        "cidade": inputCidade
    }
    await criarContato(novoContatos)
    abrirFormulario()
    alert('Cadastrado com sucesso')

}
cancelarFormulario()
abrirFormulario()
await criarCardContato()

document.getElementById('salvar').addEventListener('click', function() {
    enviarFormulario()
})

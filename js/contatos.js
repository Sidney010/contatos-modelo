'use strict'

export async function lerContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/';

    const response = await fetch(url)
    const contatos = await response.json()

    return contatos
}
export async function criarContato(contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const options = {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }
    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok
}
const novoContatos = {
    "nome": "Neymar",
    "celular": "11 9 7171-6464",
    "foto": "semfoto.png",
    "email": "neymar@gmail.com",    
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Sorocaba"
}

export async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }
    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok
}

export async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'DELETE',
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}


export async function deleteTodos() {
    for (let i = 200; i < 2000; i++) {
        let url = `https://bakcend-fecaf-render.onrender.com/contatos/${i}`
        const options = { method: 'DELETE' };
        const response = await fetch(url, options);
    }

    console.log("Todos os deletes foram executados!");
}

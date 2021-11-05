import React, {Component} from 'react'
import Main from '../template/Main'

//Axios, biblioteca HTTP
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

//ACESSO AO BACKEND JÁ CONFIGURADO
const baseUrl = 'http://localhost:3001/users'

//Estado inicial do componente, permite que o usuário cancele e volte ao estado inicial
const initialState = {
    user: { name: '', email: ''},
    list: []
}


export default class UserCrud extends Component{
    state = {...initialState}

    //Limpa o formulário quando estiver preenchido, não limpando a lista
    clear(){
        this.setState({user: initialState.user})
    }

    //Serve para incluir ou alterar um usuário existente
    save(){
        const user = this.state.user

        //Se tiver ID >0, a gente altera. Caso contrário, inclui
        const method = user.id ? 'put' : 'post'

        //Varia para PUT e POST
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        //Chama o Axios, baseado em Promise
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                //Altera o estado do usuário e atualiza a lista
                this.setState({user: initialState.user, list})
            })
    }

    getUpdatedList(user){
        //Filter gera uma nova lista
        const list = this.state.list.filter(u => u.id !== user.id)

        //Põe o usuário na primeira posição do array (ou lista)
        list.unshift(user)

        //Resumindo: tira o usuário da lista, altera e põe de novo na lista na primeira posição

        return list
    }

    render(){
        return (
            <Main {...headerProps}>
                Cadastro de usuário
            </Main>
        )
    }
}
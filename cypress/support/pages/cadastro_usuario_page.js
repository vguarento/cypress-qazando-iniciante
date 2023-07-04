/// <reference types="cypress" />

export default {
    clicarCadastrar(){
        cy.get('#btnRegister')
            .click()
    },

    // validarMensageErro(){
    //     cy.get('.errorLabel')
    //         .then((element)=> {
    //             expect(element).to.be.visible
    //             expect(element.text()).eq('O campo nome deve ser prenchido')
    //         })
    // }

    validarMensageErro(mensagem){
        cy.get('.errorLabel')
           .should('be.visible')
           .should('have.text', mensagem)
    },

    preencherNome(nome) {
        cy.get('#user')
            .type(nome)
    },

    preencherEmail(email) {
        cy.get('#email')
            .type(email)
    },

    preencherSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucesso(nome){
        cy.get('#swal2-title')
           .should('be.visible')
           .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
           .should('be.visible')
           .should('have.text', `Bem-vindo ${nome}`) // ou 'Bem-vindo ' + nome

        cy.get('.swal2-confirm').click()
    }
}
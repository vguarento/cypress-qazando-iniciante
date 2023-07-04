/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário',() => {
        commum_page.acessarCadastroUsuario()
    });

    it('Campo nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensageErro('O campo nome deve ser prenchido')
    });

    it('Campo e-mail vazio', () => {
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensageErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo e-mail inválido', () => {
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.person.firstName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensageErro('O campo e-mail deve ser prenchido corretamente')        
    });

    it('Campo senha vazio', () => {
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensageErro('O campo senha deve ter pelo menos 6 dígitos')        
    });

    it('Campo senha inválido', () => {
        cadastro_usuario_page.preencherNome(faker.person.fullName())
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha('12036')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensageErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro com sucesso', () => {

        const name = faker.person.fullName()

        cadastro_usuario_page.preencherNome(name)
        cadastro_usuario_page.preencherEmail(faker.internet.email())
        cadastro_usuario_page.preencherSenha('123456')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(name)
    });
});
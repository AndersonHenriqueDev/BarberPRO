export class AuthTokenError extends Error {
    constructor(){
        super('Erro com autenticação de token.')
    }
}
//definindo a classe de cliente
export class Cliente {
    nome;
    _cpf;
    static numeroClientes = 0;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome  = nome;
        this._cpf  = cpf;
        Cliente.numeroClientes += 1;
    }
}
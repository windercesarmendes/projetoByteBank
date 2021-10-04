import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    conta;
    _cliente;    
    _saldoConta = 0;
    static numeroContas = 0;

    constructor(cliente, agencia, conta){
        this.agencia = agencia;
        this.cliente = cliente;
        this.conta   = conta;
        ContaCorrente.numeroContas += 1;
    }

    set cliente(valor) {
        if (valor instanceof Cliente) {
            this._cliente = valor;
        }

    }

    get agencia(){
        return this.agencia;
    }
    
    get conta(){
        return this.conta;
    }

    get cliente() {
        return this.cliente;
    }

    get saldoConta() {
        return this._saldoConta;
    }

    setSacar(valor) {
        if (this._saldoConta >= valor) {
            this._saldoConta -= valor;
            return valor;
        }
    }

    setDepositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldoConta += valor;
        return valor;
    }

    setTransferir(valor, conta) {
        const valorSacado = this.setSacar(valor);
        conta.setDepositar(valorSacado);
        return conta._saldoConta;
    }


}
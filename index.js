//Projeto inicial controle bancário
import { Cliente } from './classes/Cliente.js';
import { ContaCorrente } from './classes/ContaCorrente.js';


//Definindo o cliente 1
const Cliente1 = new Cliente("Winder César Mendes", 83459138100);
const ContaCorrenteCliente1 = new ContaCorrente (Cliente1, 2032, 1001);

//defininco o cliente 2
const Cliente2 = new Cliente("César Mendes",83459138199);
const ContaCorrenteCliente2 = new ContaCorrente(Cliente2, 2032, 1002);

//movimentar conta (depósitos e saques) para o cliente 1
const valorDepositado = ContaCorrenteCliente1.setDepositar(1000);
const valorSacado     = ContaCorrenteCliente1.setSacar(999);
console.log(ContaCorrenteCliente1);

console.log("Extrato de conta corrente:"+"\n" 
                                        + "Crédito (+) = " + valorDepositado +"\n" 
                                        + "Débito  (-) = " + valorSacado +"\n" 
                                        + "Saldo   (=) = " + ContaCorrenteCliente1.saldoConta
            );



//realizar transferência de valores
const valorTransferir = ContaCorrenteCliente1._saldoConta;
ContaCorrenteCliente1.setTransferir(valorTransferir,ContaCorrenteCliente2);
console.log (`Transferência realizada com sucesso no valor de R$`+ ContaCorrenteCliente2.saldoConta +"\n\n");

//extrato do cliente 2
console.log(ContaCorrenteCliente2);
ContaCorrenteCliente2.valorDepositado = ContaCorrenteCliente2._saldoConta;
ContaCorrenteCliente2.valorSacado     = 0;
console.log("Extrato de conta corrente:"+"\n" 
                                        + "Crédito (+) = " + ContaCorrenteCliente2.valorDepositado +"\n" 
                                        + "Débito  (-) = " + ContaCorrenteCliente2.valorSacado +"\n" 
                                        + "Saldo   (=) = " + ContaCorrenteCliente2.saldoConta
            );

//Imprimindo o total de clientes e contas
console.log("Total de clientes do ByteBank: "+ Cliente.numeroClientes);

console.log("Total de Contas do ByteBank: "+ ContaCorrente.numeroContas);


import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaUniversitaria } from "./Contas/ContaUniversitaria.js";
class Banco {
  // _id = 1;
  static main() {
    let numero = 0;
    const contaCorrente = this.criaContaCorrente(numero, 354, 8000, {
      limite: 25000,
      cvv: '355',
      numero: '87986548498'
    });

    const contaUniversitaria = this.criaContaUniversitaria(numero, 354, 8000);

    console.log([contaUniversitaria.saldo, contaUniversitaria.sacar(700), contaUniversitaria.saldo, contaUniversitaria.sacar(500), contaUniversitaria.saldo])
  };

  static criaContaCorrente(numero, agencia, saldo, cartaoDeCredito) {
    const pessoa = new ContaCorrente(numero, agencia, saldo, cartaoDeCredito);

    return pessoa;
  };

  static criaContaUniversitaria(numero, agencia, saldo) {
    const pessoa = new ContaUniversitaria(numero, agencia, saldo);

    return pessoa;
  };


};

Banco.main();
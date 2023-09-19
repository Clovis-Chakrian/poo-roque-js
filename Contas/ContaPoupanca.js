import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca {
  constructor(numero, agencia, saldo) {
    super();
    this.tipo = 'Poupança';
    this.numero = numero;
    this.agencia = agencia;
    this.saldo = saldo;
  };
};
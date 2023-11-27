export class ContaBancaria {
  constructor(numero, agencia, titular, cpf) {
    this.titular = titular;
    this.cpf = cpf;
    this.numero = numero;
    this.agencia = agencia;
    this.tipo = "Corrente";
    this.saldo = 5000;
    this.historico = [
      {
        operacao: "Criação de conta",
        message: "Conta criada realizada com sucesso!",
        data: new Date()
      }
    ]
  };

  getNumero() {
    return this.numero;
  };

  getSaldo() {
    return this.saldo;
  };

  sacar(valor) {
    this.saldo -= valor;
    this.addTransacao("SAQUE", valor);
  };

  depositar(valor) {
    this.saldo += valor;
    this.addTransacao("DEPOSITO", valor);
  };

  addTransacao(operacao, valor) {
    const transacao = {
      operacao,
      valor,
      data: new Date()
    }

    this.historico = [...this.historico, transacao];
  }

  getConta() {
    return {
      titular: this.titular,
      CPF: this.cpf,
      numero: this.numero,
      agencia: this.agencia,
      tipo: this.tipo,
      saldo: this.saldo,
      transacoes: this.historico
    }
  }

  getTrasacoes() {
    return this.historico;
  }
};
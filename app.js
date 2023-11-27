import { ContaBancaria } from './Contas/ContaBancaria.js'
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

//console.log(`Thank you for your valuable feedback: ${answer}`);

//rl.close();

class Banco {
  static async main() {
    console.log("Seja bem vindo! Para iniciar sua conta, precisamos de algumas informações suas.")
    const nome = await rl.question('Nome completo: ');
    const CPF = await rl.question("CPF: ");
    const programa = { estaRodando: true };

    console.log("\nEstamos criando sua conta... Um momento.\n");
    const conta = this.criaContaCorrente(nome, CPF);
    const menu = this.menu;
    const trataOpcao = this.trataOpcao;




    async function rodaPrograma() {
      if (!programa.estaRodando) {
        rl.close();
        return;
      };

      menu();
      const opcao = await rl.question("Digite o número da opção que deseja executar: ");
      if (Number(opcao) === 1 || Number(opcao) === 2) {
        const valor = await rl.question("Digite o valor para realizar a operação: ");
        trataOpcao(opcao, conta, programa, valor);
        return rodaPrograma();
      } else {
        trataOpcao(opcao, conta, programa, 0);
        return rodaPrograma();
      }
    }

    rodaPrograma();
  };

  static criaContaCorrente(nome, cpf) {
    const conta = new ContaBancaria(354479, 48756, nome, cpf);

    return conta;
  };

  static menu() {
    console.log("Agora com a conta criada, você pode executar qualquer uma dessas funções: ")
    console.log("1 - Depositar\n2 - Sacar\n3 - Consultar saldo\n4 - Ver transações\n5 - consultar dados da conta\n0 - Sair");
    console.log("\nTenha em mente que se você sair do programa as informções não são salvas,\nlogo você deverá realizar a etapa de criação anterior a essa.")
  }

  static async trataOpcao(opcao, conta, programa, valor) {
    switch (Number(opcao)) {
      case 1:
        conta.depositar(Number(valor));
        console.log(`\nDepósito de ${valor} realizado com sucesso.\n`);
        break;

      case 2:
        conta.sacar(Number(valor));
        console.log(`\nSaque de ${valor} realizado com sucesso.\n`);
        break;

      case 3:
        console.log(`\nSeu saldo atual é de: ${conta.getSaldo()}\n`);
        break;

      case 4:
        console.log("\nSeu histórico de transações realizados:\n");
        console.log(conta.getTransacoes());
        break;

      case 5:
        console.log("\nSeus dados: \n");
        console.log(conta.getConta())
        break;

      case 0:
        console.log("\nObrigado por usar o Cli-Bank. Até uma próxima!\n")
        programa.estaRodando = false;
        break;

      default:
        console.log(`\nOpção inválida. ${opcao} não é uma opção válida, selecione uma das mensionadas anteriormente.\n`);
        break
    }

    return;
  }
};

Banco.main();
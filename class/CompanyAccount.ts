import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    if (this.validateStatus()) {
      let balance: number = this.getBalance()
      console.log('Foi aprovado um empréstimo no valor de R$', loan, '.')
      balance = balance + loan
      this.setBalance(balance)
      console.log('Seu saldo é: R$', balance, '.')
    }
  }
}

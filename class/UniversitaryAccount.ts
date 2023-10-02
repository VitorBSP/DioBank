import { DioAccount } from "./DioAccount"

export class UniversitaryAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            let balance: number = this.getBalance()
            console.log('Foi depositado R$', value + 10, '.')
            balance = balance + value + 10
            this.setBalance(balance)
            console.log('Seu saldo é: R$', balance, '.')
        }
    }
}

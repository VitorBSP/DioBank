export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      console.log('Foi depositado R$', value, '.')
      this.balance = this.balance + value
      console.log('Seu saldo é: R$', this.balance, '.')
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (value < this.balance) {
        console.log('Foi sacado R$', value, '.')
        this.balance = this.balance - value
        console.log('Seu saldo é: R$', this.balance, '.')
      }
      else {
        console.log('Impossível sacar esse valor.')
        //throw new Error('Saldo insuficiente.')
      }

    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

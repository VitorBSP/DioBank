import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { UniversitaryAccount } from './class/UniversitaryAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getBalance())
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.getBalance()
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10000)
companyAccount.withdraw(50000)
companyAccount.getLoan(10000000)
companyAccount.withdraw(50000)
console.log(companyAccount)
console.log(companyAccount.getName())
console.log(companyAccount.getBalance())

const universitaryAccount: UniversitaryAccount = new UniversitaryAccount('Vitor', 15)
console.log(universitaryAccount.getBalance())
universitaryAccount.deposit(50)
universitaryAccount.withdraw(55)
console.log(universitaryAccount.getBalance())
console.log(universitaryAccount.getName())
console.log(universitaryAccount.getBalance())
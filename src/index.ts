import Car from './car'
import CreditCard from './credit-card'
import DebitCard from './debit-card'
import NubankRewards from './nubank-rewards'
import Moto from './moto'

const card = new CreditCard()
card.validate()
card.collectPayment()

console.log('<== ============================= ==>')
const debitCard = new DebitCard()
debitCard.validate()
debitCard.collectPayment()

console.log('<== ============================= ==>')
const nubank = new NubankRewards()
nubank.validate()
nubank.collectPayment()

console.log('<== ============================= ==>')
const vehicle = new Car('Amarelo', 202, 2.6, 4)
const motoCycle = new Moto('Branca', 2022, 250)

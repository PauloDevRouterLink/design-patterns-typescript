import NubankCard from './nubank-card/nubank-card'

export default class CreditCard extends NubankCard {
  validate(): void {
    console.log('verificando o limite...')
  }
}

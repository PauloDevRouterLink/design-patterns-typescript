import NubankCard from './nubank-card/nubank-card'

export default class DebitCard extends NubankCard {
  validate(): void {
    console.log('Validar se há saldo suficiente...')
  }
}

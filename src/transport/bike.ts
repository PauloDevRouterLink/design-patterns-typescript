import { IVehicles } from './interfaces'

export class Bike implements IVehicles {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando trajeto...')
  }

  getCargo(): void {
    console.log('Pegando a encomenda!')
  }
}

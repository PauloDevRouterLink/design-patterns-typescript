import { IVehicles } from './interfaces'

export class Car implements IVehicles {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando trajeto...')
  }

  getCargo(): void {
    console.log('Pegamos os passageiros')
  }
}

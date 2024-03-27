import { ILandVehicle } from './interfaces'

export class MotoCycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando a entrega...')
  }

  getCargo(): void {
    console.log('Já pegamos a encomenda')
  }
}

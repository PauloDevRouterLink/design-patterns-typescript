import { ILandVehicle } from './interfaces'

export class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando o trajeto...')
  }

  getCargo(): void {
    console.log('Pegamos os passageiros, estamos pronto')
  }
}

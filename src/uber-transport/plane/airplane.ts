import { IAirCraft } from './interfaces'

export class AirPlane implements IAirCraft {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log('Iniciando a decolagem...')
  }

  getCargo(): void {
    console.log('Pegamos os tripulantes, estamos pronto')
  }

  checkWind(): void {
    console.log('Vento a 25km, ventos okay')
  }
}

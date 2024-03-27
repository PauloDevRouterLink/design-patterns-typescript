import { IAirCraft } from './interfaces'

export class Helicopter implements IAirCraft {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log('Iniciando a decolagem...')
  }

  getCargo(): void {
    console.log('Tripulantes ok. Ligando hélices...')
  }

  checkWind(): void {
    console.log('Ventos a 25km, Sudeste, ventos okay')
  }
}

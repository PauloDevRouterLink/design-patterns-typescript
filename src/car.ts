import IVehicle from './interfaces/vehicle'
import { IVehicleCarProps } from './interfaces/vehicles-car'

export default class Car implements IVehicleCarProps, IVehicle {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats)
  }

  startVehicle(): void {
    console.log('ligando os motores.')
  }

  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number,
  ): void {
    console.log(`
      Carro da cor ${color}, do ano ${year} com motor de ${engine} e com ${seats} assentos.
    `)

    this.startVehicle()
  }
}

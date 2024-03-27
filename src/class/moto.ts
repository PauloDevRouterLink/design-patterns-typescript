import { IVehicleMotoCycleProps } from '../interfaces/vehicles-moto-cycle'
import IVehicle from '../interfaces/vehicle'

export default class Moto implements IVehicleMotoCycleProps, IVehicle {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotoCycle(color, year, engine)
  }

  startVehicle(): void {
    console.log('ligando os motores.')
  }

  configurationMotoCycle(color: string, year: number, engine: number): void {
    console.log(
      ` Uma moto da cor ${color}, do ano ${year} com ${engine} cilindrada.`,
    )

    this.startVehicle()
  }
}

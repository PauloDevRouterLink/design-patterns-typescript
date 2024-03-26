import IVehicleMotoCycle from '../interfaces/vehicles-moto-cycle'

export default class MotoCycle implements IVehicleMotoCycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine)
  }

  startVehicle(): void {
    console.log('ligando os motores.')
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`Criando um moto: ${color}, ${year}, ${engine} cilindrada.`)

    this.startVehicle()
  }
}

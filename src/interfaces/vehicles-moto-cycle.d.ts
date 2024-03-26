import IVehicle from './vehicle'
export interface IVehicleMotoCycleProps extends IVehicle {
  configurationMotoCycle(color: string, year: number, engine: number): void
}

interface IVehicleMotoCycle {
  startVehicle(): void
  configure(color: string, year: number, engine: number): void
}

export default IVehicleMotoCycle

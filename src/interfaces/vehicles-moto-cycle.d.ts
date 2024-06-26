export interface IVehicleMotoCycleProps {
  configurationMotoCycle(color: string, year: number, engine: number): void
}

interface IVehicleMotoCycle {
  startVehicle(): void
  configure(color: string, year: number, engine: number): void
}

export default IVehicleMotoCycle

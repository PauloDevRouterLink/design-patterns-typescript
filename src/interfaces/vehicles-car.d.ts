export interface IVehicleCarProps {
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number,
  ): void
}

interface IVehicleCar {
  startVehicle(): void
  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number,
  ): void
}

export default IVehicleCar

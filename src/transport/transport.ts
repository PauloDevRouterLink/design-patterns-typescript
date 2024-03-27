import { IVehicles } from './interfaces'

export default abstract class Transport {
  startTransport(): void {
    const vehicle = this.createTransport()

    vehicle.startRoute()
  }

  protected abstract createTransport(): IVehicles
}

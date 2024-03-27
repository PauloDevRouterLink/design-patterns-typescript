import { ITransportFactory } from '../factory/interfaces'
import { ILandVehicle } from '../land/interfaces'
import { IAirCraft } from '../plane/interfaces'

export default class Client {
  private vehicle: ILandVehicle
  private aircraft: IAirCraft

  constructor(factory: ITransportFactory) {
    this.vehicle = factory.createTransportVehicle()
    this.aircraft = factory.createTransportAirCraft()
  }

  startRoute(): void {
    this.vehicle.startRoute()
    this.aircraft.startRoute()
  }
}

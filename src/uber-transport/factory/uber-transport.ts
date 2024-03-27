import { Car } from '../land'
import { ILandVehicle } from '../land/interfaces'
import { AirPlane } from '../plane'
import { IAirCraft } from '../plane/interfaces'
import { ITransportFactory } from './interfaces'

export default class UberTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Car()
  }

  createTransportAirCraft(): IAirCraft {
    return new AirPlane()
  }
}

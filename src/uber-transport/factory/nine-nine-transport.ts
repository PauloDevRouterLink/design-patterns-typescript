import { ILandVehicle } from '../land/interfaces'
import { MotoCycle } from '../land/moto-cycle'
import { Helicopter } from '../plane'
import { IAirCraft } from '../plane/interfaces'
import { ITransportFactory } from './interfaces'

export default class NineNineTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new MotoCycle()
  }

  createTransportAirCraft(): IAirCraft {
    return new Helicopter()
  }
}

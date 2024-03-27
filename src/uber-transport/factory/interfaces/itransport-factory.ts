import { ILandVehicle } from '../../land/interfaces'
import { IAirCraft } from '../../plane/interfaces'

interface ITransportFactory {
  createTransportVehicle(): ILandVehicle
  createTransportAirCraft(): IAirCraft
}

export type { ITransportFactory }

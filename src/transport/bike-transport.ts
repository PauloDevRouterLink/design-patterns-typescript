import Transport from './transport'
import { IVehicles } from './interfaces'
import { Bike } from './bike'

export default class BikeTransport extends Transport {
  protected createTransport(): IVehicles {
    return new Bike()
  }
}

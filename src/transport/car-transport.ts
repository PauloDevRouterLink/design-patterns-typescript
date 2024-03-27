import { IVehicles } from './interfaces'
import Transport from './transport'
import { Car } from '.'

export default class CarTransport extends Transport {
  protected createTransport(): IVehicles {
    return new Car()
  }
}

import { IVehicles } from './interfaces'
import Transport from './transport'
import { MotoCycle } from '.'

export default class MotoCycleTransport extends Transport {
  protected createTransport(): IVehicles {
    return new MotoCycle()
  }
}

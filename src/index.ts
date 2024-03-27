import BikeTransport from './transport/bike-transport'
import CarTransport from './transport/car-transport'
import MotoCycleTransport from './transport/moto-cycle-transport'
import Transport from './transport/transport'

declare let process

let transport: Transport

if (process.argv.includes('--uber')) {
  transport = new CarTransport()
} else if (process.argv.includes('--log')) {
  transport = new MotoCycleTransport()
} else if (process.argv.includes('--bike')) {
  transport = new BikeTransport()
} else {
  console.log('Selecione o tipo de entrega!')
}

if (transport) {
  transport.startTransport()
}

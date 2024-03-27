import Client from './uber-transport/client/client'
import { Company } from './uber-transport/constants'
import { ITransportFactory } from './uber-transport/factory/interfaces'
import NineNineTransport from './uber-transport/factory/nine-nine-transport'
import UberTransport from './uber-transport/factory/uber-transport'

const currentCompany = Company.UBER
let factory: ITransportFactory

switch (currentCompany) {
  case Company.UBER:
    factory = new UberTransport()
    break

  case Company.NINE_NINE:
    factory = new NineNineTransport()
    break

  default:
    console.log('Companhia desconhecida')
}

const client = new Client(factory)

client.startRoute()

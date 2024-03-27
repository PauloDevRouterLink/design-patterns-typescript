import { IVehicles } from './interfaces'

export class MotoCycle implements IVehicles {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando a entrega dessa encomenda')
  }

  getCargo(): void {
    console.log('Já pegamos a encomenda')
  }
}

import IDBProduct from '../interfaces/db-product'

export default class MySQLProduct implements IDBProduct {
  getProductById(prodId: number): string {
    return `MySQL: Exibindo dados do produto: ${prodId}`
  }
}

import IDBProduct from '../interfaces/db-product'

export default class MongoDBProduct implements IDBProduct {
  getProductById(prodId: number): string {
    return `MONGODB: Exibindo dados do produto: ${prodId}`
  }
}

import DBProductFactory from '../factory/db-product-factory'

export default class Payment {
  pay(productId: number): void {
    const dbProduct = DBProductFactory.create()
    const product = dbProduct.getProductById(productId)

    console.log(product)
  }
}

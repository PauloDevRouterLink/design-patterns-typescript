import IDBProduct from '../interfaces/db-product'
import MongoDBProduct from '../model/mongo-db-product'
import MySQLProduct from '../model/my-sql-product'
import DB from '../model/db'

export default class DBProductFactory {
  private static type: DB = DB.MONGODB

  public static create(): IDBProduct {
    if (DBProductFactory.type === DB.MYSQL) {
      return new MySQLProduct()
    } else if (DBProductFactory.type === DB.MONGODB) {
      return new MongoDBProduct()
    } else {
      return new MySQLProduct()
    }
  }
}

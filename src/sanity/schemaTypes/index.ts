import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import orders from './orders'
import customer from './customer'
import orderItem from './orderItem'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products , orders,customer,orderItem],
}

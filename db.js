import Realm from 'realm'
import {resolve} from 'rsvp'

const restaurants = {
  name: 'restaurants',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    distant_lineup: 'bool',
    qr_code: 'string'
  }}

const customers = {
  name: 'customers',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    phone: 'int',
    hash: 'string'
  }}

const queue = {
  name: 'queue',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    restaurant_id: 'int',
    total_queue: 'int',
    currrent_number: 'int'
  }}

const restaurantCustomerQueue = {
  name: 'restaurant_customer_queue',
  primaryKey: 'id',
  properties: {
    id: 'int',
    queue_id: 'int',
    customer_id: 'int',
    queue_number: 'int',
    dinning: 'bool',
    missed: 'bool'
  }}

export const createData = () => Realm.open({schema: [restaurants, customers, queue, restaurantCustomerQueue]})
  .then(() => {
    resolve()
  })
  .catch(err => console.error(err))


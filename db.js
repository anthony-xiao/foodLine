import Realm from 'realm'

let restaurants = {
  name: 'restaurants',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    distant_lineup: 'bool',
    qr_code: 'string'
  }}

let customers = {
  name: 'customers',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    phone: 'int',
    hash: 'string'
  }}

let queue = {
  name: 'queue',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    restaurant_id: 'int',
    total_queue: 'int',
    currrent_number: 'int'
  }}

let restaurantCustomerQueue = {
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

Realm.open({
  path: 
  schema: [restaurants, customers, queue, restaurantCustomerQueue]})


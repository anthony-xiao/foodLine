/* eslint-disable no-console */

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
    restaurant_id: 'int',
    open_time: 'date',
    close_time: 'date'
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

export const migrateData = () => Realm.open({
  schema: [restaurants, customers, queue, restaurantCustomerQueue],
  schemaVersion: 1,
  migration: (oldRealm, newRealm) => {
    // if (oldRealm.schemaVersion < 1) {
    //   const oldObject = oldRealm.objects('queue')
    // const newObject = newRealm.objects('queue')
    // for (let i = 0; i < oldObject.length; i++) {
    //   oldObject[i].total_queue
    // }
  }
})
  .then(realm => {
    const queue = realm.objects('queue')
    realm.delete(queue.total_queue && queue.current_number)
  })
  .catch(err => console.error(err))

export const databaseOption = {
  schema: [restaurants, customers, queue, restaurantCustomerQueue],
  schemaVersion: 2
}

export const createData = () => Realm.open(databaseOption)
  .then(() => {
    resolve()
  })
  .catch(err => console.error(err))

export const deleteAllData = () => Realm.deleteAll()

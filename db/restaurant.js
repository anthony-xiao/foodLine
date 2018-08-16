/* eslint-disable no-console */

import Realm from 'realm'
import {databaseOption} from './util'

// querying the current number of the latest queue for a specific restaurant
export const currentQueue = id => Realm.open(databaseOption)
  .then(realm => {
    const queue = realm.objects('queue').filtered(`restaurant_id == ${id}`)
    const restaurantQueueIds = queue.map(line => {
      return line.id
    })
    const maxId = Math.max(...restaurantQueueIds)
    const currentQue = realm.objects('restaurant_customer_queue').filtered(`dinning == false && missed == false && queue_id == ${maxId}`)
    const queueNums = currentQue.map(que => {
      return que.queue_number
    })
    return Math.min(...queueNums)
  })
  .catch(err => console.error(err))

export const totalQueue = id => Realm.open(databaseOption)
  .then(realm => {
    const queue = realm.objects('queue').filtered(`restaurant_id == ${id}`)
    const restaurantQueueIds = queue.map(line => {
      return line.id
    })
    const maxId = Math.max(...restaurantQueueIds)
    const currentQue = realm.objects('restaurant_customer_queue').filtered(`dinning == false && missed == false && queue_id == ${maxId}`)
    return currentQue.length
  })
  .catch(err => console.error(err))

export const addRestaurantCustomerQueue = (id, newCustomer) => Realm.open(databaseOption)
  .then(realm => {
    const allId = realm.objects('restaurant_customer_queue').map(waitingCustomer => {
      return waitingCustomer.id
    })
    const newId = Math.max(...allId) + 1
    const queue = realm.objects('queue').filtered(`restaurant_id == ${id}`)
    const restaurantQueueIds = queue.map(line => {
      return line.id
    })
    const maxId = Math.max(...restaurantQueueIds)
    const currentQue = realm.objects('restaurant_customer_queue').filtered(`queue_id == ${maxId}`)
    const queueNumbers = currentQue.map(line => {
      return line.queue_number
    })
    const nextNumber = Math.max(...queueNumbers) + 1
    console.log(nextNumber)
    realm.write(() => {
      realm.create('restaurant_customer_queue', {id: newId, queue_number: nextNumber, ...newCustomer})
    }
    )
  })

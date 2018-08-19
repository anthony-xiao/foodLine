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

// querying the total number of the queue for a specific restaurant
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

// adds a customer to the most current queue for a restaurant
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

// updates a customer in queue's status to dinning true or missed true
export const nextCustomer = (id, currentNumber, status) => Realm.open(databaseOption)
  .then(realm => {
    const queue = realm.objects('queue').filtered(`restaurant_id == ${id}`)
    const restaurantQueueIds = queue.map(line => {
      return line.id
    })
    const maxId = Math.max(...restaurantQueueIds)
    const customerQueue = realm.objects('restaurant_customer_queue').find((line) => {
      return line.queue_number === currentNumber && line.queue_id === maxId
    })
    const customerQueueId = customerQueue.id
    realm.write(() => {
      if (status === 'missed') {
        realm.create('restaurant_customer_queue', {id: customerQueueId, missed: true}, true)
      } else {
        realm.create('restaurant_customer_queue', {id: customerQueueId, dinning: true}, true)
      }
    }
    )
  })

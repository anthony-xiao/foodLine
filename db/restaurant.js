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
    const currentQue = realm.objects('restaurant_customer_queue').filtered('dinning == false' && 'missed === false' && `queue_id == ${maxId}`)
    console.log(currentQue)
    // return currentQue.length
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

export const addRestaurantCustomerQueue = newCustomer => Realm.open(databaseOption)
  .then(realm => {
    const allId = realm.objects('restaurant_customer_queue').map(waitingCustomer => {
      return waitingCustomer.id
    })
    const maxId = Math.max(...allId) + 1
    console.log(maxId)
    realm.write(() => {
      realm.create('restaurant_customer_queue', {id: maxId, ...newCustomer})
    }
    )
  })

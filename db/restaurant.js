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
    const currentQue = realm.objects('queue').find(restaurantQueue => {
      return restaurantQueue.id === maxId
    })
    return currentQue.currrent_number
  })
  .catch(err => console.error(err))

export const totalQueue = id => Realm.open(databaseOption)
  .then(realm => {
    const queue = realm.objects('queue').filtered(`restaurant_id == ${id}`)
    const restaurantQueueIds = queue.map(line => {
      return line.id
    })
    const maxId = Math.max(...restaurantQueueIds)
    const currentQue = realm.objects('queue').find(restaurantQueue => {
      return restaurantQueue.id === maxId
    })
    return (currentQue.total_queue - currentQue.currrent_number + 1)
  })
  .catch(err => console.error(err))

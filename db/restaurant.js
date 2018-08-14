/* eslint-disable no-console */

import Realm from 'realm'
import {databaseOption} from './util'

export const latestQueue = id => Realm.open(databaseOption)
  .then(realm => {
    const queue = realm.objects('queue').filtered(`restaurant_id == ${id}`)
    console.log(queue[0])
    return queue[0]
  })
  .catch(err => console.error(err))

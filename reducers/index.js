import {combineReducers} from 'redux'
import currentQueueNum from './restaurant/currentQueueNum'
import totalInQueue from './restaurant/totalInQueue'

export default combineReducers({
  currentQueueNum,
  totalInQueue
})

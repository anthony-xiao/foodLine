import {showError} from './error'
import currentQueue from '../db/restaurant'

export const RECEIVE_CURRENT_QUEUE_NUMBER = 'RECEIVE_CURRENT_QUEUE_NUMBER'

export const receiveCurrentQueueNumber = (num) => {
  return {
    type: RECEIVE_CURRENT_QUEUE_NUMBER,
    num
  }
}

export function getCurrentQueueNumber (id) {
  return (dispatch) => {
    currentQueue(id)
    .then(num => {
      dispatch(receiveCurrentQueueNumber(num))
    })
    .catch(() => {
      dispatch(showError('An unexpected error has occurred'))
    })
}
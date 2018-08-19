import {showError} from '../error'
import {totalQueue} from '../../db/restaurant'

export const RECEIVE_TOTAL_IN_QUEUE = 'RECEIVE_TOTAL_IN_QUEUE'

export const receiveTotalInQueueNumber = (num) => {
  return {
    type: RECEIVE_TOTAL_IN_QUEUE,
    num
  }
}

export function getTotalInQueueNumber (id) {
  return (dispatch) => {
    totalQueue(id)
      .then(num => {
        dispatch(receiveTotalInQueueNumber(num))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

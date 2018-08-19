import {showError} from '../error'
import {nextCustomer} from '../../db/restaurant'
import {getTotalInQueueNumber} from './totalInQueue'
import {getCurrentQueueNumber} from './currentQueueNum'

export function updateCustomer (id, currentNumber, status) {
  return (dispatch) => {
    nextCustomer(id, currentNumber, status)
      .then(() => {
        dispatch(getTotalInQueueNumber(id))
        dispatch(getCurrentQueueNumber(id))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

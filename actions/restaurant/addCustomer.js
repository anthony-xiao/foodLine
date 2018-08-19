import {showError} from '../error'
import {addRestaurantCustomerQueue} from '../../db/restaurant'
import {getCurrentQueueNumber} from './currentQueueNum'
import {getTotalInQueueNumber} from './totalInQueue'

export function addCustomer (id, newCustomer) {
  return (dispatch) => {
    addRestaurantCustomerQueue(id, newCustomer)
      .then(() => {
        dispatch(getCurrentQueueNumber(id))
        dispatch(getTotalInQueueNumber(id))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

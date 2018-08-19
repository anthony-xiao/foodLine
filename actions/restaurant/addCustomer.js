import {showError} from '../error'
import {addRestaurantCustomerQueue} from '../../db/restaurant'
import {getTotalInQueueNumber} from './totalInQueue'

export function addCustomer (id, newCustomer) {
  return (dispatch) => {
    addRestaurantCustomerQueue(id, newCustomer)
      .then(() => {
        dispatch(getTotalInQueueNumber(id))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

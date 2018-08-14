import {RECEIVE_CURRENT_QUEUE_NUMBER} from '../../actions/restaurant/currentQueueNum'

const currentQueueNumber = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_QUEUE_NUMBER:
      return action.num

    default:
      return state
  }
}

export default currentQueueNumber

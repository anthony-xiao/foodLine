import {RECEIVE_TOTAL_IN_QUEUE} from '../../actions/restaurant/totalInQueue'

const totalInQueue = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_TOTAL_IN_QUEUE:
      return action.num

    default:
      return state
  }
}

export default totalInQueue

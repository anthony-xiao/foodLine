export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const SHOW_SUCCESS = 'SHOW_SUCCESS'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}

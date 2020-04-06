import { combineReducers } from 'redux'
import session from './session'

export default combineReducers({
  session,
})

// NOTE: příprava na více druhů akcí, momentálně není nutné
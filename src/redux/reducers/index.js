import { combineReducers } from 'redux'
import tickets from './tickets'
import users from './users'

export combineReducers({
  users,
  tickets
})
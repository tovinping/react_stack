import { createStore, combineReducers } from 'redux'
import { createSelectorHook } from 'react-redux'

import global from './global'

const rootReducer = combineReducers({
  global,
})
const store = createStore(rootReducer)

export type IRootStateType = ReturnType<typeof rootReducer>
export type IRootDispatchType = typeof store.dispatch

export const useRootState = createSelectorHook<IRootStateType>()

export default store

import { combineReducers, createStore } from "redux"
import { UsersReducer } from './redux/users/UsersReducer'
let Reducers=combineReducers({
    users:UsersReducer
})


export const useStore=createStore(Reducers);
import { legacy_createStore as createStore } from "redux"
import { counterReducer } from "./Reducer"

export const myStore = createStore(counterReducer)
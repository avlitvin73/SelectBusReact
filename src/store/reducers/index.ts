import { combineReducers } from "redux"
import { categoryReducer } from "./categoryReducer"
import { itemReducer } from "./itemReducer"

export const rootReducer = combineReducers({
  category: categoryReducer,
  item: itemReducer,
})

export type RootState = ReturnType<typeof rootReducer> 
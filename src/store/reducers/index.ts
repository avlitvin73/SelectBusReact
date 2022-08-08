import { combineReducers } from "redux"
import { categoryReducer } from "./categoryReducer"


export const rootReducer = combineReducers({
  category: categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer> 
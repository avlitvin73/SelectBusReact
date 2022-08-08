import { CategoryAction, CategoryActionTypes, CategoryState } from "../../types/category"


const initialState: CategoryState = {
  categories: []
}

export const categoryReducer = (state = initialState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case CategoryActionTypes.SET_CATEGORIES:
      return { ...state, categories: action.payload }

    case CategoryActionTypes.CREATE_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] }

    case CategoryActionTypes.READ_CATEGORY:
      return state

    case CategoryActionTypes.UPDATE_CATEGORY:
      const newCategories = [...state.categories]
      const updateIndex = newCategories.findIndex(category => category.id === action.payload.id)
      if (updateIndex !== -1) newCategories[updateIndex] = action.payload
      return { ...state, categories: newCategories }

    case CategoryActionTypes.DELETE_CATEGORY:
      return { ...state, categories: state.categories.filter((category) => category.id !== action.payload.id) }

    default:
      return state
  }
}
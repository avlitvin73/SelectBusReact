import { ItemAction, ItemActionTypes, ItemState } from "../../types/item"

const initialState: ItemState = {
  items: []
}

export const itemReducer = (state = initialState, action: ItemAction): ItemState => {
  switch (action.type) {
    case ItemActionTypes.SET_ITEMS:
      return { ...state, items: action.payload }

    case ItemActionTypes.CREATE_ITEM:
      return { ...state, items: [...state.items, action.payload] }

    case ItemActionTypes.READ_ITEM:
      return state

    case ItemActionTypes.UPDATE_ITEM:
      const newItems = [...state.items]
      const updateIndex = newItems.findIndex(item => item.id === action.payload.id)
      if (updateIndex !== -1) newItems[updateIndex] = action.payload
      return { ...state, items: newItems }

    case ItemActionTypes.DELETE_ITEM:
      return { ...state, items: state.items.filter((item) => item.id !== action.payload.id) }

    default:
      return state
  }
}
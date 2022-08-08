import { Dispatch } from "redux";
import { ItemAction, ItemActionTypes } from "../../types/item";
import database from "../../data/database.json";


const fetchItems = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(database), 0);
  });

export const loadItems = () => {
  return async (dispatch: Dispatch<ItemAction>) => {

    const data = await fetchItems();
    dispatch({ type: ItemActionTypes.SET_ITEMS, payload: data });
  };
};


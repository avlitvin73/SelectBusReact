import { Dispatch } from "redux";
import { Item, ItemAction, ItemActionTypes } from "../../types/item";
import database from "../../data/database.json";
import { Category } from "../../types/category";


const fetchItems = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(database), 0);
  });
export const loadItems = (category: string) => {
  return async (dispatch: Dispatch<ItemAction>) => {
    const data = await fetchItems();
    const filteredData = data.filter((item:Item) => item.parent_id === category)
    dispatch({ type: ItemActionTypes.SET_ITEMS, payload: filteredData });
  };
};


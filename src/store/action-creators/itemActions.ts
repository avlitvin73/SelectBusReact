import { Dispatch } from "redux";
import { ItemAction, ItemActionTypes } from "../../types/item";
import database from "../../data/database.json";


const fetchItems = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(database), 0);
  });

export const loadItems = (category) => {
  return async (dispatch: Dispatch<ItemAction>) => {

    const data = await fetchItems();
    console.log(data)
    const filteredData = data.filter((item) => item.parent_id === category)
    console.log('category', category)
    dispatch({ type: ItemActionTypes.SET_ITEMS, payload: filteredData });
  };
};


import { Dispatch } from "redux";
import { CategoryAction, CategoryActionTypes } from "../../types/category";
import categories from "../../data/categories.json";


const fetchCategories = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(categories), 0);
  });

export const loadCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {

    const data = await fetchCategories();
    dispatch({ type: CategoryActionTypes.SET_CATEGORIES, payload: data });
  };
};
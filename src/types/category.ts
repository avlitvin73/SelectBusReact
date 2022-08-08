interface Category {
  id: number,
  name: string,
  flag: string
}

export interface CategoryState {
  categories: Category[];
}
export enum CategoryActionTypes {
  SET_CATEGORIES = 'SET_CATEGORIES',
  CREATE_CATEGORY = 'CREATE_CATEGORY',
  READ_CATEGORY = 'READ_CATEGORY',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
}
interface SetCategoriesAction {
  type: CategoryActionTypes.SET_CATEGORIES;
  payload: Category[]
}
interface CreateCategoryAction {
  type: CategoryActionTypes.CREATE_CATEGORY;
  payload: Category
}
interface ReadCategoryAction {
  type: CategoryActionTypes.READ_CATEGORY;
  payload: Category;
}
interface UpdateCategoryAction {
  type: CategoryActionTypes.UPDATE_CATEGORY;
  payload: Category
}
interface DeleteCategoryAction {
  type: CategoryActionTypes.DELETE_CATEGORY;
  payload: Category
}

export type CategoryAction =
  SetCategoriesAction |
  CreateCategoryAction |
  ReadCategoryAction |
  UpdateCategoryAction |
  DeleteCategoryAction
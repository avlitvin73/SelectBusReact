interface Item {
  id: number,
  name: string,
  flag: string
}

export interface ItemState {
  items: Item[];
}
export enum ItemActionTypes {
  SET_ITEMS = 'SET_ITEMS',
  CREATE_ITEM = 'CREATE_ITEM',
  READ_ITEM = 'READ_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}
interface SetItemsAction {
  type: ItemActionTypes.SET_ITEMS;
  payload: Item[]
}
interface CreateItemAction {
  type: ItemActionTypes.CREATE_ITEM;
  payload: Item
}
interface ReadItemAction {
  type: ItemActionTypes.READ_ITEM;
  payload: Item;
}
interface UpdateItemAction {
  type: ItemActionTypes.UPDATE_ITEM;
  payload: Item
}
interface DeleteItemAction {
  type: ItemActionTypes.DELETE_ITEM;
  payload: Item
}

export type ItemAction =
  SetItemsAction |
  CreateItemAction |
  ReadItemAction |
  UpdateItemAction |
  DeleteItemAction
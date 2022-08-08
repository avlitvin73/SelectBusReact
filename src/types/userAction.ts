export interface Action {
    type: string;
    event: string
  }
  
  export interface ActionState {
    actions: Action[];
  }
  export enum ActionActionTypes {
    ADD_USER_ACTION = 'ADD_USER_ACTION',
    READ_ACTION = 'READ_Action',
    UPDATE_ACTION = 'UPDATE_ACTION',
    DELETE_ACTION = 'UPDATE_ACTION'
  }
  interface CreateActionAction {
    type: ActionActionTypes.ADD_USER_ACTION;
    payload: Action
  }
  interface ReadActionAction {
    type: ActionActionTypes.READ_ACTION;
    payload: Action;
  }
  interface UpdateActionAction {
    type: ActionActionTypes.UPDATE_ACTION;
    payload: Action
  }
  interface DeleteActionAction {
    type: ActionActionTypes.DELETE_ACTION;
    payload: Action
  }
  
  export type ActionAction =
    CreateActionAction |
    ReadActionAction |
    UpdateActionAction |
    DeleteActionAction
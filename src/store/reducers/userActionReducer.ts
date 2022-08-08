import { Action } from "../../types/userAction";

const initialState = {
    user_actions: []
};

export const userActionsReducer = (state = initialState, action:Action) => {
    
    const ADD_USER_ACTION = "ADD_USER_ACTION";
    switch (action.type) {
        
        case ADD_USER_ACTION:
            return {
                ...state,
                user_actions: [...state.user_actions, action.event]
            };

        default:
            return state;
    }
};
import React, { createContext, useReducer } from "react";

interface IState {
  username: string;
}

interface IAction {
  type: string;
  payload?: IState;
}

interface IUserContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

const userState: IState = {
  username: "",
};

function userReducer(state: IState, action: IAction) {
  switch (action.type) {
    case "CREATE_USER":
      if (action.payload) {
        return {
          ...state,
          username: action.payload.username,
        };
      } else {
        return state;
      }
    case "DELETE_USER":
      return {
        ...state,
        username: "",
      };
    default:
      return state;
  }
}

export const UserContext = createContext<IUserContext | null>(null);

const UserStore = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, userState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export default UserStore;

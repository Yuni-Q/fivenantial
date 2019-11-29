import { SET_LAYOUT } from "../actions/types";

  
export const initialState = {
  title: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAYOUT:
      return {
        ...state,
        title: action.payload,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};
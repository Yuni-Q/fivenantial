import { SIGN_IN } from "../actions/types";

  
export const initialState = {
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        name: action.payload,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};
import { FETCH_DATA } from "../actions/types";

  
export const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        ...action.payload.data,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};
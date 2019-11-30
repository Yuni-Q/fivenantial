import { FETCH_DATA } from "../actions/types";

  
export const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      console.log(33, action.payload)
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
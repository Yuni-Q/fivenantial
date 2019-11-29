import { createAction } from 'redux-actions';
import * as types from './types'

export const setLayout = createAction(
  types.SET_LAYOUT,
  (title) => title,
);
export const signin = createAction(
  types.SIGN_IN,
  (name) => name,
);

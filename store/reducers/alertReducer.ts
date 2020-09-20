import IAction from '../../interfaces/IAction';
import IAlert from '../../interfaces/IAlert';
import { AlertTypes } from '../types';

const handlers = {
  DEFAULT: (state: IAlert) => state,
  [AlertTypes.SHOW_ALERT]: (state: IAlert, action: IAction) => {
    return { ...action.payload };
  },
  [AlertTypes.HIDE_ALERT]: (state: IAlert, action: IAction) => {
    return initialState;
  },
}

const initialState: IAlert = {
  status: null,
  title: null,
  text: null
}

export const alertReducer = (state = initialState, action: IAction): IAlert => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}
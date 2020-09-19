import IAction from '../../interfaces/IAction';
import IAlert from '../../interfaces/IAlert';

const handlers = {
  DEFAULT: (state: IAlert) => state,
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
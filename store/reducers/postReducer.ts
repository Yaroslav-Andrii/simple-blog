import IAction from '../../interfaces/IAction';
import IPost from '../../interfaces/IPost';

const handlers = {
  DEFAULT: (state: IPost[]) => state,
}

const initialState: IPost[] = [];

export const postReducer = (state = initialState, action: IAction): IPost[] => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}
import IAction from '../../interfaces/IAction';
import IPost from '../../interfaces/IPost';
import { PostTypes } from '../types';

const handlers = {
  DEFAULT: (state: IPost[]) => state,
  [PostTypes.INIT_POSTS]: (state: IPost[], action: IAction) => {
    return action.payload
  },
  [PostTypes.DELETE_POST]: (state: IPost[], action: IAction) => {
    return state.filter((post) => post.id !== action.payload);
  },
  [PostTypes.CREATE_POST]: (state: IPost[], action: IAction) => {
    return [...state, action.payload]
  },
  [PostTypes.UPDATE_POST]: (state: IPost[], action: IAction) => {
    return state.map((post) => {
      if (post.id === action.payload.id) {
        return action.payload;
      }
      return post;
    });
  },
}

const initialState: IPost[] = [];

export const postReducer = (state = initialState, action: IAction): IPost[] => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}
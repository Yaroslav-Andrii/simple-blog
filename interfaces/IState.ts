import IPost from './IPost';
import IAlert from './IAlert';

export default interface IState {
  posts: IPost[],
  alert: IAlert,
}
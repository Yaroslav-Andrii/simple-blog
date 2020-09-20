import IPost from './IPost';
import IAlert from './IAlert';

export default interface IState {
  postsState: IPost[],
  alertState: IAlert,
}
import Axios, { AxiosResponse } from 'axios';
import { AlertTypes, PostTypes, CommentTypes } from './types';
import { PostApi, PostApiPrefix, CommentApi } from './apiRoutes';
import IAlert from '../interfaces/IAlert';
import IComment from '../interfaces/IComment';
import IAction from '../interfaces/IAction';
import IPost from '../interfaces/IPost';

export const initPostsList = (posts: IPost[]): IAction => {
  return {
    type: PostTypes.INIT_POSTS,
    payload: posts
  }
}

export const initPostsListAsync = () => {
  return async (dispatch): Promise<void> => {
    try {

      const reqUrl: string = PostApi.GET_POSTS_URL;
      const response: AxiosResponse = await Axios.get(reqUrl);

      dispatch({ 
        type: PostTypes.INIT_POSTS,
        payload: response.data
      });

    } catch (error) {

      dispatch( 
        showAlert({
          status: 'error',
          title: 'ERROR!',
          text: error.message
        })
      );

    }
  }
}

export const deletePost = (postId: number) => {
  return async (dispatch): Promise<void> => {
    try {

      const reqUrl: string = PostApiPrefix.DELETE_POST + postId;
      const response: AxiosResponse = await Axios.delete(reqUrl);

      dispatch( 
        showAlert({
          status: 'success',
          title: 'DELETE!',
          text: `The post was delete!`
        })
      );

      dispatch({
        type: PostTypes.DELETE_POST,
        payload: postId,
      });

    } catch (error) {

      dispatch( 
        showAlert({
          status: 'error',
          title: 'ERROR!',
          text: error.message
        }) 
      );

    }
  }
}

export const createPost = (post: IPost) => {
  return async (dispatch): Promise<void> => {
    try {

      const reqUrl: string = PostApi.CREATE_POST_URL;
      const reqBody = {
        title: post.title,
        body: post.body
      };

      const response: AxiosResponse = await Axios.post(reqUrl, reqBody);

      dispatch( 
        showAlert({
          status: 'success',
          title: 'CREATE!',
          text: `The post was create!`
        })
      );

      dispatch({
        type: PostTypes.CREATE_POST,
        payload: post,
      });

    } catch (error) {

      dispatch( 
        showAlert({
          status: 'error',
          title: 'ERROR!',
          text: error.message
        }) 
      );

    }
  }
}

export const updatePost = (post: IPost) => {
  return async (dispatch): Promise<void> => {
    try {

      const reqUrl: string = PostApiPrefix.UPDATE_POST + post.id;
      const reqBody = {
        title: post.title,
        body: post.body
      };

      const response: AxiosResponse = await Axios.put(reqUrl, reqBody);

      dispatch( 
        showAlert({
          status: 'success',
          title: 'UPDATE!',
          text: `The post was update!`
        })
      );

      dispatch({
        type: PostTypes.UPDATE_POST,
        payload: post,
      });

    } catch (error) {

      dispatch( 
        showAlert({
          status: 'error',
          title: 'ERROR!',
          text: error.message
        }) 
      );

    }
  }
}

export const createComment = (comment: IComment) => {
  return async (dispatch): Promise<void> => {
    try {

      const reqUrl: string = CommentApi.CREATE_COMMENT;
      const reqBody = {
        body: comment.body,
        postId: comment.postId
      };

      const response: AxiosResponse = await Axios.post(reqUrl, reqBody);

      dispatch({
        type: CommentTypes.CREATE_COMMENT,
        payload: comment
      });

    } catch (error) {

      dispatch( 
        showAlert({
          status: 'error',
          title: 'ERROR!',
          text: error.message
        }) 
      );

    }
  }
}

export const showAlert = (alert: IAlert): IAction => {
  return {
    type: AlertTypes.SHOW_ALERT,
    payload: alert
  }
}

export const hideAlert = (): IAction => {
  return { type: AlertTypes.HIDE_ALERT }
}
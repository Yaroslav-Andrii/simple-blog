export enum PostApi {
  GET_POSTS_URL = 'https://simple-blog-api.crew.red/posts',
  CREATE_POST_URL = 'https://simple-blog-api.crew.red/posts',
}

export enum PostApiPrefix {
  GET_POST = 'https://simple-blog-api.crew.red/posts/',
  UPDATE_POST = 'https://simple-blog-api.crew.red/posts/',
  DELETE_POST = 'https://simple-blog-api.crew.red/posts/',
  COMMENTS_QUERY = '?_embed=comments',
}

export enum CommentApi {
  CREATE_COMMENT = 'https://simple-blog-api.crew.red/comments',
}
import _ from 'lodash';
import FetchDataAPI from '../apis/FetchDataAPI';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map(post => post.userId)
    .uniq()
    .value()
    .forEach(userId => dispatch(fetchUser(userId)));
}

export const fetchPosts = () => async dispatch => {
  const response = await FetchDataAPI.getPosts();

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
  const response = await FetchDataAPI.getUser(id);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
import Axios from 'axios';
import {
  getBlog,
} from './actions';

export const fetchBlog = () => async (dispatch) => {
  try {
    const res = await Axios.get('https://blogger-system.herokuapp.com/blogs');
    dispatch(getBlog(res.data.reverse()));
  } catch (error) {
    console.log(error);
  }
};

export const fetchBlogbySlugId = id => async (dispatch) => {
  try {
    const res = await Axios.get(`https://blogger-system.herokuapp.com/blogs/${id}`);
    return res.data;
  } catch (error) {
    return error.reposnse;
  }
};

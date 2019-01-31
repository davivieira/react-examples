import axios from 'axios';
import { timeout } from 'q';

const fetchDataConf = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

const FetchDataApi = {
  getPosts: () => {
    return fetchDataConf.get('/posts');
  },
  getUser: (id) => {
    return fetchDataConf.get(`users/${id}`);
  }
}

export default FetchDataApi;
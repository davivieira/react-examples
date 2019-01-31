import axios from 'axios';

const AUTH = 'Client-ID d504e733aae1e789b50bb145a9c1621adcd3dfd582df3241bf1a035116a9e607';

const configuredApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: AUTH
  }
});

const UnsplashAPI = {
  getPhotos: (term) => {
    return configuredApi.get('/search/photos', {
      params: {
        query: term
      }
    });
  }
}

export default UnsplashAPI;
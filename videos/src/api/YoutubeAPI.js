import axios from 'axios';

const KEY = 'AIzaSyCeaTHG2YUP6ADF4HqiFTAwjzHEK6WDYSw';

const YoutubeAPIConf = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    maxResults: 5
  }
});

const YoutubeAPI = {
  search: (term) => {
    return YoutubeAPIConf.get('/search', {
      params: {
        q: term
      }
    });
  }
}

export default YoutubeAPI;

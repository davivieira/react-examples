import { combineReducers } from 'redux';

const songSelectReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTION') {
    return action.payload;
  }

  return selectedSong;
}

const songListReducer = () => {
  return [
    { title: 'I Want it That Way', duration: '3:35' },
    { title: 'Like a Virgin', duration: '4:15' },
    { title: 'Chandelier', duration: '3:50' },
    { title: 'Eagle Fly Free', duration: '5:41' }
  ]
}

export default combineReducers({
  songs: songListReducer,
  selectedSong: songSelectReducer
})
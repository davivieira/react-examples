export const selectSong = song => {
  return {
    type: 'SONG_SELECTION',
    payload: song
  }
}
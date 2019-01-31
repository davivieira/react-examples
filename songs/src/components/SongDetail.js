import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  if (props.selectedSong) {
    return <div>{props.selectedSong.title}</div>
  }

  return <div><h1>No song selected</h1></div>
}

const mapStateToProps = state => {
  console.log(state);
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
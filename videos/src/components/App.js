import React from 'react';
import SearchBar from './SearchBar';
import YoutubeAPI from '../api/YoutubeAPI';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('Welcome');
  }

  onSearchSubmit = async term => {
    try {
      const response = await YoutubeAPI.search(term);

      this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    } catch (err) {
      console.log(err);
    }
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
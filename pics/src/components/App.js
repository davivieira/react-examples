import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import UnsplashAPI from '../api/unsplash';

class App extends React.Component {

  state = { images: [] };

  onSearchTerm = async (term) => {
    const response = await UnsplashAPI.getPhotos(term);
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchTerm={this.onSearchTerm} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyCYE-NX8qHUoS2EJBkUorBcpo3olXcP5y0';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      videos: [],
      selectedVideo: null
  };

  this.karthik('sachin tendulkar');
}

karthik(term){
  YTSearch({key:API_KEY,term: term},(videos) => {
    this.setState({
      videos:videos,
      selectedVideo:videos [0]
    });
  });
}

  render(){
    const karthik = _.debounce((term) => {this.karthik(term)}, 300);
    return (
           <div>
             <SearchBar madhu={karthik}/>

             <VideoDetails video={this.state.selectedVideo}/>

             <VideoList
             onVideoSelect={selectedVideo => this.setState({selectedVideo})}
             videos={this.state.videos}/>

          </div>
        );
  }
}

ReactDom.render(<App />,document.querySelector('.container'));

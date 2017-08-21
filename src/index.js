
import _ from 'lodash'
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyB9sYidKEH2puSu4P_SeB1Um0gheRxFvw8';


// create a new component and this produce some HTML

class App extends Component {
constructor(props)
{
  super(props);
  this.state  = {
    videos:[],
    selectedVideo : null
   };
  
this.videoSearch('tea');
}

videoSearch(term){
  YTSearch({key: API_KEY, term: term} , (videos)=>{
    this.setState({
      videos:videos,
      selectedVideo : videos[0]
    });
  });
}


render () {
  const videoSearch = _.debounce((term)=> {this.videoSearch(term)},500);
  return  (
  <div>
  <SearchBar onSearchTermChanged={videoSearch}/>
  <VideoDetail video={this.state.selectedVideo} />
  <VideoList 
  onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
   videos={this.state.videos}/>
</div>
);
}
}


//Take this component HTML and put in the DOM
ReactDom.render(<App />,document.querySelector('.container'));



